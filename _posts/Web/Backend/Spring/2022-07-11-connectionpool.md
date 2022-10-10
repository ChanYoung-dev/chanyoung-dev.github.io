---
permalink: /Backend/Spring/connectionPool/
title: "DataSource와 ConnectionPool"
toc: true
categories:
  - Backend🦄Spring
comments: true
sidebar:
  - title: "Backend🦄"
  - nav: "Backend-menu"
tags:
  - Spring
sexy: 1
main: "Spring"
header:
  teaser: https://ahex.co/wp-content/uploads/2018/01/Mask-Group-3-1.png
  overlay_image: https://ahex.co/wp-content/uploads/2018/01/Mask-Group-3-1.png
  overlay_filter: 0.5
excerpt: connectionPool을 적용해보자
---

<span style = "font-size:1.5em;  font-weight: 700;">Connection Pool</span><br>
<abbr title="" id="HikariCP">Connection Pool의 대표기술</abbr>와 DataSource에 대해 알아보자  
DataSource란 DB와 Spring을 연결해주는 인터페이스이다. DataSource의 대표적인 구현체로는 <abbr title="" id="JdbcDriverManager">DriverManagerDataSource</abbr>, HikariDataSource이 있다.  
Connection Pool은 말그대로 Connection을 미리 만들어놓고 재사용하는 것이다. 즉 세션 하나당 커넥션이 한개이므로 세션하나를 재사용한다.  
반면에 DriverManagerDataSource는 커넥션을 매번 새로 만들어준다. 즉 세션이 새로 생긴다.
{: .notice--primary}


# 사용 코드

## 1. application.yml
{% highlight yml linenos %}
spring:
  datasource:
    url: jdbc:h2:tcp://localhost/~/test
    username: sa
    password:

{% endhighlight %}

## 2. Repository

{% highlight java linenos %}
@Slf4j
public class MemberRepositoryV1 {

    private final DataSource dataSource;
    public MemberRepositoryV1(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    public Member save(Member member) throws SQLException {

        String sql = "insert into member(member_id, money) values(?, ?)";
        Connection con = null;
        PreparedStatement pstmt = null;

        try {
            con = getConnection();
            pstmt = con.prepareStatement(sql);
            pstmt.setString(1, member.getMemberId());
            pstmt.setInt(2, member.getMoney());

            pstmt.executeUpdate();
            return member;
        } catch (
                SQLException e) {
            log.error("db error", e);
            throw e;
        } finally {
            close(con, pstmt, null);
        }
    }

    public Member findById(String memberId) throws SQLException {
        String sql = "select * from member where member_id = ?";
        Connection con = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        try {
            con = getConnection();
            pstmt = con.prepareStatement(sql);
            pstmt.setString(1, memberId);
            rs = pstmt.executeQuery();
            if (rs.next()) {
                Member member = new Member();
                member.setMemberId(rs.getString("member_id"));
                member.setMoney(rs.getInt("money"));
                return member;
            } else {
                throw new NoSuchElementException("member not found memberId=" +
                        memberId); }
        } catch (SQLException e) {
            log.error("db error", e);
            throw e;
        } finally {

            close(con, pstmt, rs);
        }
    }

    public void update(String memberId, int money) throws SQLException {
        String sql = "update member set money=? where member_id=?";
        Connection con = null;
        PreparedStatement pstmt = null;
        try {
            con = getConnection();
            pstmt = con.prepareStatement(sql);
            pstmt.setInt(1, money);
            pstmt.setString(2, memberId);
            int resultSize = pstmt.executeUpdate();
            log.info("resultSize={}", resultSize);
        } catch (SQLException e) {
            log.error("db error", e);
            throw e;
        } finally {
            close(con, pstmt, null);
        }
    }

    public void delete(String memberId) throws SQLException {
        String sql = "delete from member where member_id=?";
        Connection con = null;
        PreparedStatement pstmt = null;
        try {
            con = getConnection();
            pstmt = con.prepareStatement(sql);
            pstmt.setString(1, memberId);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            log.error("db error", e);
            throw e;
        } finally {
            close(con, pstmt, null);
        }
    }


    private void close(Connection con, Statement stmt, ResultSet rs) {
        JdbcUtils.closeResultSet(rs);
        JdbcUtils.closeStatement(stmt);
        JdbcUtils.closeConnection(con);
    }
    private Connection getConnection() throws SQLException {
        Connection con = dataSource.getConnection();
        log.info("get connection={}, class={}", con, con.getClass());
        return con;
    }
}
{% endhighlight %}

## 3.Test

{% highlight java linenos %}
@Slf4j
public class MemberRepositoryV1Test {

    MemberRepositoryV1 repository;

    @BeforeEach
    void beforeEach() throws Exception {
    //기본 DriverManager(Interface) - 항상 새로운 커넥션 획득
        // DriverManagerDataSource dataSource = new DriverManagerDataSource(URL, USERNAME, PASSWORD);
    //커넥션 풀링: HikariProxyConnection -> JdbcConnection
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl(URL);
        dataSource.setUsername(USERNAME);
        dataSource.setPassword(PASSWORD);
        repository = new MemberRepositoryV1(dataSource);
    }



    @Test
    void crud() throws SQLException, InterruptedException {
        log.info("start");

        //save
        Member member = new Member("memberV12", 10000);
        repository.save(member);

        //findById
        Member memberById = repository.findById(member.getMemberId());
        assertThat(memberById).isNotNull();

        //update: money: 10000 -> 20000
        repository.update(member.getMemberId(), 20000);
        Member updatedMember = repository.findById(member.getMemberId());
        assertThat(updatedMember.getMoney()).isEqualTo(20000);
        //delete
        repository.delete(member.getMemberId());
        assertThatThrownBy(() -> repository.findById(member.getMemberId()))
                .isInstanceOf(NoSuchElementException.class);
    }
}
{% endhighlight %}

### 3.1 DriverManager
`DriverManagerDataSource`를 사용할 경우  

{% highlight java linenos %}
@BeforeEach
void beforeEach() throws Exception {
    
    DriverManagerDataSource dataSource = new DriverManagerDataSource(URL, USERNAME, PASSWORD);
    repository = new MemberRepositoryV1(dataSource);
}
{% endhighlight %}

### 3.2 HikariDataSource
`HikariDataSource`를 사용할 경우

{% highlight java linenos %}
@BeforeEach
void beforeEach() throws Exception {
    HikariDataSource dataSource = new HikariDataSource();
    dataSource.setJdbcUrl(URL);
    dataSource.setUsername(USERNAME);
    dataSource.setPassword(PASSWORD);
    repository = new MemberRepositoryV1(dataSource);
}
{% endhighlight %}