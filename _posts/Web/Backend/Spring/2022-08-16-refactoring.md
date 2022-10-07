---
permalink: /Backend/Spring/refactoring/
title: "Refactoring"
toc: true
categories:
  - Backend🦄Spring
comments: true
sidebar:
  - title: "Backend🦄"
  - nav: "Backend-menu"
tags:
  - Spring
  - Backend
sexy: 1
main: "Spring"
header:
  teaser: https://ahex.co/wp-content/uploads/2018/01/Mask-Group-3-1.png
  overlay_image: https://ahex.co/wp-content/uploads/2018/01/Mask-Group-3-1.png
  overlay_filter: 0.5
excerpt: 리팩토링을 해보자
---

<span style = "font-size:1.5em;  font-weight: 700;">리팩토링</span><br>
<abbr title="" id="HikariCP">백기선님의 리팩토링 강의</abbr>를 참고하여 기록해놓은 리팩토링 자료
{: .notice--primary}

# 냄새2. 중복 코드


## 리팩토링 기술 4: 함수 추출하기

## 리팩토링 기술 5: 코드 정리하기
- 변수를 한꺼번에 위에 선언하지말고 사용하는 함수 바로 위에 선언하자

### before

{% highlight java linenos %}
    private void printReviewers() throws IOException {
        // Get github issue to check homework
        GitHub gitHub = GitHub.connect();
        GHRepository repository = gitHub.getRepository("whiteship/live-study");
        GHIssue issue = repository.getIssue(30);
        Set<String> reviewers = new HashSet<>();


        issue.getComments().forEach(c -> reviewers.add(c.getUserName()));
        reviewers.forEach(System.out::println);
    }
{% endhighlight %}

### after
{% highlight java linenos %}
    private void printReviewers() throws IOException {
        // Get github issue to check homework
        GitHub gitHub = GitHub.connect();
        GHRepository repository = gitHub.getRepository("whiteship/live-study");
        GHIssue issue = repository.getIssue(30);

    
        Set<String> reviewers = new HashSet<>(); // 사용하고자 하는 함수 바로 위에 선언
        issue.getComments().forEach(c -> reviewers.add(c.getUserName()));

        
        reviewers.forEach(System.out::println);
    }
{% endhighlight %}

## 리팩토링 기술 6: 메소드 올리기

# 냄새 3. 긴함수

## 리팩토링 7. 임시 변수를 질의 함수로 바꾸기
### before
  {% highlight java linenos %}
  ...
    participants.forEach(p -> {
                /** rate -> getRate()로 함수화 **/
                long count = p.homework().values().stream()
                        .filter(v -> v == true)
                        .count();
                double rate = count * 100 / totalNumberOfEvents; 

                String markdownForHomework = String.format("| %s %s | %.2f%% |\n", p.username(), checkMark(p, totalNumberOfEvents), rate);
                writer.print(markdownForHomework);
            });
    }
  {% endhighlight %}
  `rate` 변수를 함수(`getRate()`)로 바꾸어서 매개변수에 삽입

### after
  {% highlight java linenos %}
  ...
    /** 본문함수 **/
    participants.forEach(p -> {
                String markdownForHomework = getMarkdownForParticipant(totalNumberOfEvents, p);
                writer.print(markdownForHomework);
            });
    }
    
    //함수화 1
    private double getRate(int totalNumberOfEvents, Participant p) {
        long count = p.homework().values().stream()
                .filter(v -> v == true)
                .count();
        double rate = count * 100 / totalNumberOfEvents;
        return rate;
    }

    private String getMarkdownForParticipant(int totalNumberOfEvents, Participant p) {
        return String.format("| %s %s | %.2f%% |\n", p.username(), checkMark(p, totalNumberOfEvents), getRate(totalNumberOfEvents, p)); 
        /** rate -> getRate() **/
    }
  {% endhighlight %}
    

## 리팩토링 8. 매개변수 객체 만들기<sup>Introduce Parameter Object</sup>
> 하나의 함수를 여러개의 함수로 분리하면서 해당 함수로 전달해야 할 매개변수가 많아질때1.

### before
  {% highlight java linenos %}
  private double getRate(int totalNumberOfEvents, Participant p) {
        ...
         return rate;
  }
  {% endhighlight %}
    
### after
  {% highlight java linenos %}
  private double getRate(ParticipantPrinter p) {
                ...
                return rate;
  }
  {% endhighlight %}
  1번라인을 확인해보면 매개변수가 `int totalNumberOfEvents, Participant p` -> `ParticipantPrinter p`로 변경되어있다. 이는 매개변수의 갯수를 줄이기 위해 매개변수객체<sup>ParticipantPrinter</sup>를 만들어 사용한다


## 리팩토링 9. 객체 통째로 넘기기<sup>Preserve Whole Object</sup>
> 하나의 함수를 여러개의 함수로 분리하면서 해당 함수로 전달해야 할 매개변수가 많아질때2. 

### before
{% highlight java linenos %}
public void main(){
    List<Participant> participants = new CopyOnWriteArrayList<>();
    ...
    ...
    participants.forEach(p -> {
                String markdownForHomework = getMarkdownForParticipant(p.username(), p.homework());
                writer.print(markdownForHomework);
    });
}

private String getMarkdownForParticipant(String username, Map<Integer, Boolean> homework) {
        return String.format("| %s %s | %.2f%% |\n", username,
                checkMark(homework, this.totalNumberOfEvents),
                getRate(homework));
}
{% endhighlight %}


### after
{% highlight java linenos %}
public void main(){
    List<Participant> participants = new CopyOnWriteArrayList<>();
    ...
    ...
    participants.forEach(p -> {
                String markdownForHomework = getMarkdownForParticipant(p);
                writer.print(markdownForHomework);
    });
}

private String getMarkdownForParticipant(Participant participant) {
        return String.format("| %s %s | %.2f%% |\n", username,
                checkMark(homework, this.totalNumberOfEvents),
                getRate(homework));
}
{% endhighlight %}
- Before의 6번라인 매개변수처럼 `p.username(), p.homwork`둘다 `Participant p` 객체를 사용하므로  after에서는 `Participant`만 매개변수로 바꾸었다.
- 하지만 의존성을 고민해야한다 
- 예를 들어 다른 곳에서 `getMarkdownForParticipant`를 사용하는 경우 `Participant p`를 사용하지않고 단순히 `String username, Map<Integer, Boolean> homework`를 사용할수 있는 경우 문제가 된다


## 리팩토링 10. 함수를 명령으로 바꾸기
> 하나의 함수를 여러개의 함수로 분리하면서 해당 함수로 전달해야 할 매개변수가 많아질때3. 

### before
**StudyDashBoard.class**
```java
    private void print() throws IOException, InterruptedException {
        
        ...

        /** 이 부분뿐만 아니라 함께 관련된 함수를 명령형으로 바꾸어보자 **/
        try (FileWriter fileWriter = new FileWriter("participants.md");
            PrintWriter writer = new PrintWriter(fileWriter)) {
            participants.sort(Comparator.comparing(Participant::username));

            writer.print(header(participants.size()));

            participants.forEach(p -> {
                String markdownForHomework = getMarkdownForParticipant(p);
                writer.print(markdownForHomework);
            });
        }
    }

    /** 관련된 함수들 **/
    private String getMarkdownForParticipant(Participant p) {
        return String.format("| %s %s | %.2f%% |\n", p.username(), checkMark(p, this.totalNumberOfEvents),
                p.getRate(this.totalNumberOfEvents));
    }

    /**
     * | 참여자 (420) | 1주차 | 2주차 | 3주차 | 참석율 |
     * | --- | --- | --- | --- | --- |
     */
    private String header(int totalNumberOfParticipants) {
        StringBuilder header = new StringBuilder(String.format("| 참여자 (%d) |", totalNumberOfParticipants));

        for (int index = 1; index <= this.totalNumberOfEvents; index++) {
            header.append(String.format(" %d주차 |", index));
        }
        header.append(" 참석율 |\n");

        header.append("| --- ".repeat(Math.max(0, this.totalNumberOfEvents + 2)));
        header.append("|\n");

        return header.toString();
    }

    /**
     * |:white_check_mark:|:white_check_mark:|:white_check_mark:|:x:|
     */
    private String checkMark(Participant p, int totalEvents) {
        StringBuilder line = new StringBuilder();
        for (int i = 1 ; i <= totalEvents ; i++) {
            if(p.homework().containsKey(i) && p.homework().get(i)) {
                line.append("|:white_check_mark:");
            } else {
                line.append("|:x:");
            }
        }
        return line.toString();
    }

```

### After

**StudyDashBoard.class**
```java
    private void print() throws IOException, InterruptedException {
        
        ...

        /** 이 부분뿐만 아니라 함께 관련된 함수를 명령형으로 바꾸어보자 **/
        /*
        try (FileWriter fileWriter = new FileWriter("participants.md");
            PrintWriter writer = new PrintWriter(fileWriter)) {
            participants.sort(Comparator.comparing(Participant::username));

            writer.print(header(participants.size()));

            participants.forEach(p -> {
                String markdownForHomework = getMarkdownForParticipant(p);
                writer.print(markdownForHomework);
            });
        }
        */
        new StudyPrinter(this.totalNumberOfEvents, participants).execute();
    }
    

```
새로운 클래스를 만들고 관련된 함수들을 전부 옮긴다

**StudyPrinter.class**
- 각 함수에 필요한 공통 매개변수들을 필드로 빼내어주어(Introduce Field) 함수들의 매개변수를 줄여준다
- 이때의 공통 매개변수는 `StudyDashBoard.class`에서 사용하던 변수이어야한다(그래야 생성자 주입으로 필드 삽입 가능)
```java
public class StudyPrinter {

    /** 각 함수들의 공통 매개변수를 필드로 빼내어준다**/
    /** 이때의 공통 매개변수는 StudyDashBoard에서 사용하던 변수이어야한다(그래야 생성자 주입으로 필드 삽입 가능)**/
    private int totalNumberOfEvents;
    private List<Participant> participants;

    public StudyPrinter(int totalNumberOfEvents, List<Participant> participants) {
        this.totalNumberOfEvents = totalNumberOfEvents;
        this.participants = participants;
    }

    public void execute() throws IOException {
        try (FileWriter fileWriter = new FileWriter("participants.md");
             PrintWriter writer = new PrintWriter(fileWriter)) {
            this.participants.sort(Comparator.comparing(Participant::username));

            writer.print(header(this.participants.size()));

            this.participants.forEach(p -> {
                String markdownForHomework = getMarkdownForParticipant(p);
                writer.print(markdownForHomework);
            });
        }
    }

    private String getMarkdownForParticipant(Participant p) {
        return String.format("| %s %s | %.2f%% |\n", p.username(), checkMark(p, this.totalNumberOfEvents),
                p.getRate(this.totalNumberOfEvents));
    }

    /**
     * | 참여자 (420) | 1주차 | 2주차 | 3주차 | 참석율 |
     * | --- | --- | --- | --- | --- |
     */
    private String header(int totalNumberOfParticipants) {
        StringBuilder header = new StringBuilder(String.format("| 참여자 (%d) |", totalNumberOfParticipants));

        for (int index = 1; index <= this.totalNumberOfEvents; index++) {
            header.append(String.format(" %d주차 |", index));
        }
        header.append(" 참석율 |\n");

        header.append("| --- ".repeat(Math.max(0, this.totalNumberOfEvents + 2)));
        header.append("|\n");

        return header.toString();
    }

    /**
     * |:white_check_mark:|:white_check_mark:|:white_check_mark:|:x:|
     */
    private String checkMark(Participant p, int totalEvents) {
        StringBuilder line = new StringBuilder();
        for (int i = 1 ; i <= totalEvents ; i++) {
            if(p.homework().containsKey(i) && p.homework().get(i)) {
                line.append("|:white_check_mark:");
            } else {
                line.append("|:x:");
            }
        }
        return line.toString();
    }
}
```

### 응용버전
- 위 함수를 이용하여 printe.mode를 정할 수 있다

**StudyDashBoard.class**

```java
new StudyPrinter(this.totalNumberOfEvents, this.participants, PrinterMode.MARKDOWN).execute();
```

**StudyPrinter.class**
```java
public class StudyPrinter {

    private int totalNumberOfEvents;
    private List<Participant> participants;
    private PrinterMode printerMode; //추가

    public StudyPrinter(int totalNumberOfEvents, List<Participant> participants, PrinterMode printerMode) {
        this.totalNumberOfEvents = totalNumberOfEvents;
        this.participants = participants;
        this.participants.sort(Comparator.comparing(Participant::username));
        this.printerMode = printerMode;
    }

    public void execute() throws IOException {
        switch (printerMode) {
            case CVS -> {
                ...
            }
            case CONSOLE -> {
                ...
            }
            case MARKDOWN -> {
                ...
            }
        }
    }
    
    // 모든 case에 공통적으로 필요한 함수들
    ...
    
    // case: Mardown에 필요한 함수들
    ...
    
    // case: Console에 필요한 함수들
    ...
    
    // case: CVS 필요한 함수들
    ...
    
}
```

## 리팩토링 11. 조건문 분해하기
> 조건문 분리

### before
```java
private Participant findParticipant(String username, List<Participant> participants) {
        Participant participant;
        if (participants.stream().noneMatch(p -> p.username().equals(username))) {
            participant = new Participant(username);
            participants.add(participant);
        } else {
            participant = participants.stream().filter(p -> p.username().equals(username)).findFirst().orElseThrow();
        }

        return participant;
    }
```

### after 1단계
```java
    private Participant findParticipant(String username, List<Participant> participants) {
        Participant participant = null;
        if (isNewParticipant(username, participants)) {
            participant = createNewParticipant(username, participants);
        } else {
            participant = findExistingParticipant(username, participants);
        }
        return participant;
    }
    
    private Participant findExistingParticipant(String username, List<Participant> participants) {
        Participant participant;
        participant = participants.stream().filter(p -> p.username().equals(username)).findFirst().orElseThrow();
        return participant;
    }

    private Participant createNewParticipant(String username, List<Participant> participants) {
        Participant participant;
        participant = new Participant(username);
        participants.add(participant);
        return participant;
    }

    private boolean isNewParticipant(String username, List<Participant> participants) {
        return participants.stream().noneMatch(p -> p.username().equals(username));
    }

```

### after 2단계
```java

    private Participant findParticipant(String username, List<Participant> participants) {
        return isNewParticipant(username, participants) ?
                createNewParticipant(username, participants) :
                findExistingParticipant(username, participants);
    }

    private Participant findExistingParticipant(String username, List<Participant> participants) {
        Participant participant;
        participant = participants.stream().filter(p -> p.username().equals(username)).findFirst().orElseThrow();
        return participant;
    }

    private Participant createNewParticipant(String username, List<Participant> participants) {
        Participant participant;
        participant = new Participant(username);
        participants.add(participant);
        return participant;
    }

    private boolean isNewParticipant(String username, List<Participant> participants) {
        return participants.stream().noneMatch(p -> p.username().equals(username));
    }

```

## 리팩토링 12. 반복문 쪼개기(Split Loop)
> 같은 조건으로 여러개의 Switch 문이 있을 때

### before
{% highlight java linenos %}
private void print() throws IOException, InterruptedException {
        
        ...
        public void run() {
                    try {
                        GHIssue issue = ghRepository.getIssue(eventId);
                        List<GHIssueComment> comments = issue.getComments();
                        Date firstCreatedAt = null;
                        Participant first = null;

                        for (GHIssueComment comment : comments) {
                            Participant participant = findParticipant(comment.getUserName(), participants);
                            participant.setHomeworkDone(eventId);

                            if (firstCreatedAt == null || comment.getCreatedAt().before(firstCreatedAt)) {
                                firstCreatedAt = comment.getCreatedAt();
                                first = participant;
                            }
                        }

                        firstParticipantsForEachEvent[eventId - 1] = first;
                        latch.countDown();
                    } catch (IOException e) {
                        throw new IllegalArgumentException(e);
                    }
                }
        ...
    }
{% endhighlight %}
    


### After 1단계
- 하나의 for문을 두개로 나눈다
{% highlight java linenos %}
private void print() throws IOException, InterruptedException {
        
        ...
        public void run() {
                    try {
                        GHIssue issue = ghRepository.getIssue(eventId);
                        List<GHIssueComment> comments = issue.getComments();
                       
                       /** 1번째 for**/
                       for (GHIssueComment comment : comments) {
                            Participant participant = findParticipant(comment.getUserName(), participants);
                            participant.setHomeworkDone(eventId);
                        }


                        /** 2번째 for **/
                        Date firstCreatedAt = null;
                        Participant first = null;
                        for (GHIssueComment comment : comments) {
                            Participant participant = findParticipant(comment.getUserName(), participants); // participant는 필요하기 때문에 추가해준다.
                            
                            if (firstCreatedAt == null || comment.getCreatedAt().before(firstCreatedAt)) {
                                firstCreatedAt = comment.getCreatedAt();
                                first = participant;
                            }
                        }

                        firstParticipantsForEachEvent[eventId - 1] = first;
                        latch.countDown();
                    } catch (IOException e) {
                        throw new IllegalArgumentException(e);
                    }
            }
        ...
 }
{% endhighlight %}


### After 2단계
- 나눈 함수들을 함수화한다
{% highlight java linenos %}
private void print() throws IOException, InterruptedException {
        
        ...
        public void run() {
                    try {
                        GHIssue issue = ghRepository.getIssue(eventId);
                        List<GHIssueComment> comments = issue.getComments();
                       
                       GHIssue issue = ghRepository.getIssue(eventId);
                        List<GHIssueComment> comments = issue.getComments();
                        
                        checkHomework(comments, eventId); //첫번째 for
                        firstParticipantsForEachEvent[eventId - 1] = findFirst(comments); //두번째 for + Inline
                        
                        latch.countDown();
                    } catch (IOException e) {
                        throw new IllegalArgumentException(e);
                    }
        }
        ...
    }
    private Participant findFirst(List<GHIssueComment> comments) throws IOException {
        Date firstCreatedAt = null;
        Participant first = null;
        for (GHIssueComment comment : comments) {
            Participant participant = findParticipant(comment.getUserName(), participants);

            if (firstCreatedAt == null || comment.getCreatedAt().before(firstCreatedAt)) {
                firstCreatedAt = comment.getCreatedAt();
                first = participant;
            }
        }
        return first;
    }

    private void checkHomework(List<GHIssueComment> comments, int eventId) {
        for (GHIssueComment comment : comments) {
            Participant participant = findParticipant(comment.getUserName(), participants);
            participant.setHomeworkDone(eventId);
        }
    }
{% endhighlight %}
  

## 리팩토링 13. 조건문을 다형성으로 바꾸기(Replace Conditional with Polymorphism)
> 반복문 안에서 여러 작업을 하고 있어서 하나의 메소드로 추출하기 어려울 때

- if(true) else 와 다르게 여러 타입에 따라 각기 다른 로직으로 처리해야하는 경우에 다형성을 적용해서 조건문을 보다 명확하게 분리할 수 있다
    - ex) `if(a == 'book') return A elif(a == 'movie') return B else return C`
- 공통으로 사용되는 로직은 상위클래스에 두고 달라지는 부분만 하위 클래스에 둠으로써, 달라지는 부분만 강조할 수 있다

기존의 [위에서 본 StudyPrinter클래스]()를 참고하여 변경해보자
- 상속받아서 다형성을 구현할 것이기때문에 `Printer.mode`는 지운다

**`StudyPrinter.class`**
```java
public class StudyPrinter {

    protected int totalNumberOfEvents; //private -> protected (자식함수가 사용하기 위해)
    protected List<Participant> participants; //private -> protected (자식함수가 사용하기 위해)
    private PrinterMode printerMode; //삭제
    
    public void execute() throws IOException {
        switch (printerMode) {
            case CVS -> {
                FucntionAForCvsLogic..
                FucntionBForCvsLogic..
                CommonFunctionA
            }
            case CONSOLE -> {
                FucntionAForConsoleLogic..
                FucntionBForConsoleLogic..
                CommonFunctionA
            }
            case MARKDOWN -> {
                FucntionAForMarkdownLogic..
                FucntionBForMarkdownLogic..
                CommonFunctionA
            }
        }
    }
    
    // 모든 case에 공통적으로 필요한 함수들
    protected Reuslt CommonFunctionA(..){ //private -> protected (자식함수가 사용하기 위해)
        ...
    }
    
    // case: Mardown에 필요한 함수들
    ...
    
    // case: Console에 필요한 함수들
    ...
    
    // case: CVS 필요한 함수들
    private FucntionAForCvsLogic(){
    ..
    }
    private FucntionBForCvsLogic(){
    ..
    }


```

### `StudyPrinter`를 상속받는 함수
**CVS.class**
```java
public class CvsPrinter extends StudyPrinter{
    
    public CvsPrinter(int totalNumberOfEvents, List<Participant> participants){ //PrinterMode 지우기
        super(totalNumberOfEvents, participants);
    }
    
    @Override
    public void execute() throws IOException{
        //super.execute();
        FucntionAForCvsLogic..
        FucntionBForCvsLogic..
        CommonFunctionA //부모 클래스에 있는 함수 사용
    }
    
    // execute() - case: CVS 로직에 필요한 함수들
    private FucntionAForCvsLogic(){
    ..
    }
    private FucntionBForCvsLogic(){
    ..
    }
    
    //execute() - 공통 로직에 필요한 함수들은 부모 클래스에 있기때문에 없어야한다
    /*
    protected Reuslt CommonFunctionA(..){ //private -> protected (자식함수가 사용하기 위해)
        ...
    }
    */
}
```

# 냄새4. 긴 매개변수 목록
## [객체 통째로 넘기기]()
## [매개변수 객체 만들기]()
## 리팩토링 14. 매개 변수를 질의 함수로 바꾸기
### before
```java
    public double finalPrice() {
        double basePrice = this.quantity * this.itemPrice;
        int discountLevel = this.quantity > 100 ? 2 : 1;
        return this.discountedPrice(basePrice, discountLevel);
    }

    private double discountedPrice(double basePrice, int discountLevel) {
        return discountLevel == 2 ? basePrice * 0.9 : basePrice * 0.95;
    }
```

## After
```java
    public double finalPrice() {
        double basePrice = this.quantity * this.itemPrice;
        return this.discountedPrice(basePrice);
    }
    /**추가**/
    private int discountLevel() {
        return this.quantity > 100 ? 2 : 1;
    }

    private double discountedPrice(double basePrice) {
        return discountLevel() == 2 ? basePrice * 0.90 : basePrice * 0.95;
    }

```

## 리팩토링 15. 플래그 인수 제거하기(Remove Flag Argument)
- 함수 안에 `if true false` 분기문을 사용하는 것은 안 좋다
- 이 때 [조건문 분해하기(Decompose Condition)]()를 사용한다

```
bookConcert(customer, false), bookConcert(customer, ture)
```
이것보다는
```
bookConcert(customer), premiumBookConcert(customer)
```
을 사용하자


## 리팩토링 16. 여러 함수를 클래스로 묶기
- 비슷한 매개변수 목록을 여러 함수에서 사용하고 있다면 해당 메소드를 모아서 클래스를 만들 수 있다.
- 클래스 내부로 메소드를 옮기고, 데이터를 필드로 만들면 메소드에 전달해야 하는 매개변수 목록도 줄일 수 있다.

- [함수를 명령으로 바꾸기]() 참조


# 냄새 6. 가변 데이터
## [변수 캡슐화하기(Encapsulate Variable)]()
## [코드 정리하기(Slide Variable)]()
## [함수 추출하기(Extract Function)]()
## 리팩토링 18. 변수 쪼개기(Split Variable)
- 변수가 여러번 사용될 때
- 여러 데이터를 저장하는 변수를 나눈다

### before
```java
    public double discount(double inputValue, int quantity) {
        if (inputValue > 50) inputValue = inputValue - 2;
        if (quantity > 100) inputValue = inputValue - 1;
        return inputValue;
    }
```

### after
```java
    public double discount(double inputValue, int quantity) {
        double result = inputValue;
        if (inputValue > 50) result -= 2;
        if (quantity > 100) result -= 1;
        return result;
    }

```

### before
```java
public class Rectangle {

    private double perimeter;
    private double area;

    public void updateGeometry(double height, double width) {
        double temp = 2 * (height + width);
        System.out.println("Perimeter: " + temp);
        perimeter = temp;

        temp = height * width;
        System.out.println("Area: " + temp);
        area = temp;
    }

    public double getPerimeter() {
        return perimeter;
    }

    public double getArea() {
        return area;
    }
}

```

### after
```java
public class Rectangle {

    private double perimeter;
    private double area;

    public void updateGeometry(double height, double width) {
        final double perimeter = 2 * (height + width);
        System.out.println("Perimeter: " + perimeter);
        this.perimeter = perimeter;

        final double area = height * width;
        System.out.println("Area: " + area);
        this.area = area;
    }

    public double getPerimeter() {
        return perimeter;
    }

    public double getArea() {
        return area;
    }
}
```

## 리팩토링 19. 질의 함수와 변경 함수 분리하기(Separate Query from Modifier)
- 클라이언트가 원하는 경우에만 사이드 이팩트가 있는 함수를 호출하도록 API를 개선할 수 있다.
- 명령-조회 분리(command-query separation) 규칙
  - 어떤 값을 리턴하는 함수는 사이드 이팩트가 없어야 한다

### before
```java
void totalOutstanding() {
        Billing billing = new Billing(new Customer("keesun", List.of(new Invoice(20), new Invoice(30))),
                new EmailGateway());
        billing.getTotalOutstandingAndSendBill(); //명령과 조회가 같이 쓰인다
    }
```

### after
```java
void totalOutstanding() {
        Billing billing = new Billing(new Customer("keesun", List.of(new Invoice(20), new Invoice(30))),
                new EmailGateway());
        billing.totalOutstandingAndSendBill();
        billing.sendBill();
    }
```

### before
```java
    public String alertForMiscreant(List<Person> people) {
        for (Person p : people) {
            if (p.getName().equals("Don")) {
                setOffAlarms();
                return "Don";
            }

            if (p.getName().equals("John")) {
                setOffAlarms();
                return "John";
            }
        }

        return "";
    }
```

### after
```java
    public void alertForMiscreant(List<Person> people) {
        for (Person p : people) {
            if (p.getName().equals("Don")) {
                setOffAlarms();
            }

            if (p.getName().equals("John")) {
                setOffAlarms();
            }
        }
    }

    public String findMiscreant(List<Person> people) {
        for (Person p : people) {
            if (p.getName().equals("Don")) {
                setOffAlarms();
                return "Don";
            }

            if (p.getName().equals("John")) {
                setOffAlarms();
                return "John";
            }
        }

        return "";
    }
```

## tip. 알고리즘 교체하기
- 위 코드를 보면 `alertForMiscreant()`와 `findMiscreant()`에서 `if 문`이 중복된다
```java
    public void alertForMiscreant(List<Person> people) {
        if(!findMiscreant(people).isBlank())
            setOffAlarms();
    }

    public String findMiscreant(List<Person> people) {
        for (Person p : people) {
            if (p.getName().equals("Don")) {
                setOffAlarms();
                return "Don";
            }

            if (p.getName().equals("John")) {
                setOffAlarms();
                return "John";
            }
        }
        return "";
    }
```


## 리팩토링 20. 세터 제거하기

## 리팩토링 21. 파생 변수를 질의 함수로 바꾸기(Replace Derived Variable with Query)
- 계산해서 알아낼 수  있는 값에 적용하자

## 리팩토링 22. 여러함수를 변환 함수로 묶기(Combine Functions into Transform)
- 변수가 사용되는 범위를 제한하는 경우
- [여러 함수를 클래스로 묶기]()와 유사하다
- 소스 데이터가 변경될 수 있는 경우에는 [여러 함수를 클래스로 묶기(Combine Functions into Class)]()를 사용하는 것이 적절하다

### Before
**Client1**
```java
public class Client1 extends ReadingClient{

    double baseCharge;

    public Client1(Reading reading) {
        this.baseCharge = baseRate(reading.getMonth(), 
    }

    // Client1, Client2 공통된 기능은 ReadingClient(부모클래스)로 만들어서 구현
//    private double baseRate(Month month, Year year) {
//        return 10;
//    }

    public double getBaseCharge() {
        return baseCharge;
    }
}
```

**Client2**
```java
public class Client2 extends ReadingClient{

    private double base;
    private double taxableCharge;

    public Client2(Reading reading) {
        this.base = baseRate(reading.getMonth(), reading.getYear()) * reading.getQuantity();
        this.taxableCharge = Math.max(0, this.base - taxThreshold(reading.getYear()));
    }

    // Client1, Client2, Client3 공통된 기능은 ReadingClient(부모클래스)로 만들어서 구현
//    private double taxThreshold(Year year) {
//        return 5;
//    }
//
//    private double baseRate(Month month, Year year) {
//        return 10;
//    }

    public double getBase() {
        return base;
    }

    public double getTaxableCharge() {
        return taxableCharge;
    }
}
```

**Reading**
```java
@Getter
@AllArgumentResolver
public class Reading {
    String customer;
    double quantity;
    Month month;
    Year year;
}
```

**ReadingClient**
- `Client1`, `Client2`의 부모 클래스
```java
public class ReadingClient {
    protected double taxThreshold(Year year) {
        return 5;
    }

    protected double baseRate(Month month, Year year) {
        return 10;
    }
}
```

## after
**EnrichReading**
- `BaseCharge`값과 `TexableCharge`값을 저장할 클래스
```java
@Getter
@AllArgumentResolver
public class EnrichReading {
    Reading reading;
    double baseCharge;
    double taxableCharge;
}
```

**ReadingClient**
```java
public class ReadingClient {
    protected double taxThreshold(Year year) {
        return 5;
    }

    protected double baseRate(Month month, Year year) {
        return 10;
    }

    // baseCharge()함수와 taxableCharge()함수를 통해 base요금 값과 tax 요금을 EnrichReading 클래스에 저장하도록하는 변환 함수
    protected EnrichReading enrichReading(Reading reading){
        return new EnrichReading(reading, baseCharge(reading), taxableCharge(reading));
    }

    // 자식클래스에서 base요금 값을 계산하는 함수를 부모클래스로 올림
    private double baseCharge(Reading reading){
        return baseRate(reading.getMonth(), reading.getYear()) * reading.getQuantity();
    }

    // 자식클래스에서 tax요금 값을 계산하는 함수를 부모클래스로 올림
    private double taxableCharge(Reading reading){
        return Math.max(0, baseCharge(reading) - taxThreshold(reading.getYear()));
    }
}

```

**client2**
```java
public class Client2 extends ReadingClient{

    private double base;
    private double taxableCharge;

    public Client2(Reading reading) {
//        this.base = baseRate(reading.getMonth(), reading.getYear()) * reading.getQuantity();
//        this.taxableCharge = Math.max(0, this.base - taxThreshold(reading.getYear()));
        EnrichReading enrichReading = enrichReading(reading);
        this.base = enrichReading.getBaseCharge();
        this.taxableCharge = enrichReading.getTaxableCharge();
    }

    // Client1, Client2, Client3 공통된 기능은 ReadingClient(부모클래스)로 만들어서 구현
//    private double taxThreshold(Year year) {
//        return 5;
//    }
//
//    private double baseRate(Month month, Year year) {
//        return 10;
//    }

    public double getBase() {
        return base;
    }

    public double getTaxableCharge() {
        return taxableCharge;
    }
}
```
## 리팩토링 23. 참조를 값으로 바꾸기
- 데이터 일부를 변경하기 보다는 데이터 전체를 교체한다

### before
```java
public class Person {

    private TelephoneNumber officeTelephoneNumber;

    public String officeAreaCode() {
        return this.officeTelephoneNumber.areaCode();
    }

    public void officeAreaCode(String areaCode) {
        this.officeTelephoneNumber.setAreaCode(areaCode);
    }

    public String officeNumber() {
        return this.officeTelephoneNumber.number();
    }

    public void officeNumber(String number) {
        this.officeTelephoneNumber.setNumber(number);
    }

}

```


### after
```java
public class Person {

    private TelephoneNumber officeTelephoneNumber;

    public String officeAreaCode() {
        return this.officeTelephoneNumber.areaCode();
    }

    public void officeAreaCode(String areaCode) {
        this.officeTelephoneNumber = new TelephoneNumber(areaCode, this.officeNumber());
    }

    public String officeNumber() {
        return this.officeTelephoneNumber.number();
    }

    public void officeNumber(String number) {
        this.officeTelephoneNumber = new TelephoneNumber(this.officeAreaCode(), number);
    }

}

```


# 냄새 7. 뒤엉킨 변경

- 서로 다른문제는 서로 다른 모듈에서 해결해야 한다
- 어떤 한 모듈(함수 또는 클래스)가 여러가지 이유로 다양하게 변경되어야 하는 상황
  - 예) 새로운 결제 방식을 도입하거나, *DB*를 변경할 때 동일한 클래스에 여러 메소드를 수정해야 하는 경우

## 리팩토링 24. 단계 쪼개기(Split Phase)
- 서로 다른 일을 하는 코드를 각기 다른 모듈로 분리한다
- 서로 다른 데이터를 사용한다면 단계를 나누는데 있어 중요한 단서가 될 수 있다
- 중간 데이터를 만들어 단계를 구분하고 매개변수를 줄이는데 활용할 수 있다

### before
**PriceOrder.class**
{% highlight java linenos %}
public class PriceOrder {

    public double priceOrder(Product product, int quantity, ShippingMethod shippingMethod) {
        final double basePrice = product.basePrice() * quantity;
        final double discount = Math.max(quantity - product.discountThreshold(), 0)
                * product.basePrice() * product.discountRate();
        final double shippingPerCase = (basePrice > shippingMethod.discountThreshold()) ?
                shippingMethod.discountedFee() : shippingMethod.feePerCase();
        final double shippingCost = quantity * shippingPerCase;
        final double price = basePrice - discount + shippingCost;
        return price;
    }
}

{% endhighlight %}

## after
{% highlight java linenos %}
public class PriceOrder {

    public double priceOrder(Product product, int quantity, ShippingMethod shippingMethod) {
        final PriceData priceData = calculatePriceData(product, quantity);
        final double price = applyShipping(priceData, shippingMethod);
        return price;
    }

    private PriceData calculatePriceData(Product product, int quantity) {
        final double basePrice = product.basePrice() * quantity;
        final double discount = Math.max(quantity - product.discountThreshold(), 0)
                * product.basePrice() * product.discountRate();
        final PriceData priceData = new PriceData(basePrice, discount, quantity); // 중간데이터!
        return priceData;
    }

    private double applyShipping(PriceData priceData, ShippingMethod shippingMethod) {
        final double shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold()) ?
                shippingMethod.discountedFee() : shippingMethod.feePerCase();
        final double shippingCost = priceData.getQuantity() * shippingPerCase;
        final double price = priceData.getBasePrice() - priceData.getDiscount() + shippingCost;
        return price;
    }
    
}
{% endhighlight %}


## 리팩토링 25. 함수 옮기기(Move Function)
- 적절한 모듈로 함수를 다른 클래스로 옮기기 
- 어떤 클래스에 있는 함수가 다른 데이터 클래스와 관련있거나 관련 없는 함수는 옮겨야한다
- 함수를 옮겨갈 새로운 문맥(클래스)가 필요한 경우에는 ["여러 함수를 클래스로 묶기"]()또는 ["클래스 추출하기"]()를 사용한다


{% highlight java linenos %}
public class Account {

    private int daysOverdrawn;

    private AccountType type;
    
    ...

    private double overdraftCharge() {
        if (this.type.isPremium()) {
            final int baseCharge = 10;
            if (this.daysOverdrawn <= 7) {
                return baseCharge;
            } else {
                return baseCharge + (this.daysOverdrawn - 7) * 0.85;
            }
        } else {
            return this.daysOverdrawn * 1.75;
        }
    }

}
{% endhighlight %}


- 과연 이 함수는 `Account.class`에 잇는 것이 맞을까
- 라인 N번을 보면 `this.type`와 같이 `AccountType`를 많이 참조하면 그냥 `AccoutType`로 함수를 이동하는 것이 낫다
- 많이 참조한다 가정하고 `AccountType`로 함수를 이동시키자

{% highlight java linenos %}
public class AccountType {
    private boolean premium;

    public AccountType(boolean premium) {
        this.premium = premium;
    }

    public boolean isPremium() {
        return this.premium;
    }


    private double overdraftCharge(int daysOverdrawn) { // Account를 주입해도 된다
        if (this.isPremium()) {
            final int baseCharge = 10;
            if (daysOverdrawn <= 7) {
                return baseCharge;
            } else {
                return baseCharge + (daysOverdrawn - 7) * 0.85;
            }
        } else {
            return daysOverdrawn * 1.75;
        }
    }


}
{% endhighlight %}
- AccountType로 옮겼다
- Account를 매개변수로 하고 `account.getDaysOverdrawn`으로 사용해도 된다



## 리팩토링 26. 클래스 추출하기(Extract Class)
- 모듈이 클래스 단위라면 별도의 클래스로 분리하기

### before
{% highlight java linenos %}
public class Person {

    private String name;

    private String officeAreaCode;
    private String officeNumber; 

    public String telephoneNumber() {
        return this.officeAreaCode + " " + this.officeNumber;
    }

    ...
}
{% endhighlight %}

- `officeAreaCode`와 `òfficeNumber`는 전화번호라는 하나의 클래스로 묶을 수 있다


### after
{% highlight java linenos %}
public class Person {

    private String name;

    private final TelephoneNumber telephoneNumber;

    public String telephoneNumber() {
        return this.telephoneNumber.getAreaCode + " " + this.getNumber;
    }

    ...
}
{% endhighlight %}
- 이 때, `TelephoneNumber`는 `areacode`와 `number` 데이터 클래스이다



# 냄새 8. 산탄총 수술
- 어떤 변경 사항이 생겼을 때 여러 모듈을 수정해야 하는 상황
  - **새로운** 결제 방식을 도입하려면 여러 클래스의 코드를 수정해야한다
- [뒤엉킨 변경]()는 여러가지 이유로 하나의 모듈을 지속적으로 수정해야하는 경우이다
- 즉, 대부분 여러 모듈를 하나로 뭉치는 것이다

## [함수 옮기기]()
## [여러 함수를 클래스로 묶기(Combine Funcions into Class)]()
## [단계 쪼개기]()
## 리팩토링 27. 필드 옮기기(Move Field)
- B와 관련 있는 A클래스의 필드를 B 클래스로 옮긴다

## 리팩토링 28. 함수 인라인(Inline Function)
- [함수 추출하기(Extract Function]()의 반대에 해당하는 리팩토링
- 함수 본문이 함수 이름 만큼 또는 그보다 더 잘 의도를 표현하는 경우

## 리팩토링 29. 클래스 인라인(Inline Class)
- 두개의 클래스를 하나의 클래스로 합치기


# 냄새 9. 기능 편애
- 하나의 모듈이 너무 많은 기능에 욕심을 내는 경우

## 예재

### before
**Bill.class**
{% highlight java linenos %}
public class Bill {

    private ElectricityUsage electricityUsage;

    private GasUsage gasUsage;

    public double calculateBill() {
        var electicityBill = electricityUsage.getAmount() * electricityUsage.getPricePerUnit();
        var gasBill = gasUsage.getAmount() * gasUsage.getPricePerUnit();
        return electicityBill + gasBill;
    }

}
{% endhighlight %}
- `Bill` 클래스는 `ElectricityUsage`와 `GasUsage`클래스들의 데이터를 가져와 기능에 욕심을 내고 있다
- 함수의 위치에 대해서 잘 생각해야한다

### after
- `ElectricityUsage`와 `GasUsage`클래스에 함수들을 만들어 `Bill`클래스에서 참조하여 함수를 만든다
**Bill.class**
{% highlight java linenos %}
public class Bill {

    private ElectricityUsage electricityUsage;

    private GasUsage gasUsage;

    public double calculateBill() {
        return electicityBill.getElectricityBill() + gasUsage.getGasBill();
    }

}
{% endhighlight %}

# 냄새 10. 데이터 뭉치
- 항상 뭉쳐 다니는 데이터는 한 곳으로 모아두는 것이 좋다

## [클래스 추출하기]()
## [매개변수 객체만들기]()
## [객체 통째로 넘기기]()

# 냄새 11. 기본형 집착
- 기본형만 사용하기엔 단위 (인치 vs 미터) 또는 표기법을 표현하기 어렵다

## 리팩토링 30. 기본형을 객체로 바꾸기(Replace Primitive with Object)
- 문자열로 표현하던 전화번호의 지역 코드가 필요하거나 다양한 포맷을 지원하는 경우
- 숫자로 표현하던 온도의 단위(화씨, 섭씨)를 변환해야하는 경우

### before
**Order.class**
{% highlight java linenos %}
public class Order {

    private String priority;

    public Order(String priority) {
        this.priority = priority;
    }

    public String getPriority() {
        return priority;
    }
}
{% endhighlight %}

**OrderProcessor.class**
{% highlight java linenos %}
public class OrderProcessor {

    public long numberOfHighPriorityOrders(List<Order> orders) {
        return orders.stream()
                .filter(o -> o.getPriority() == "high" || o.getPriority() == "rush")
                .count();
    }
}
{% endhighlight %}

- `priority`를 `Stirng`타입으로 받기 때문에 다양한 포맷형식이나 비교를 할수 없다
- `priority`에 제한을 걸려면 클래스로 만들어야 한다


### after
**Priority.class**
{% highlight java linenos %}
public class Priority {

    private String value;
    private List<String> legalValues = List.of("low", "normal", "high", "rush");

    public Priority(String value){
        if (this.legalValues.contains(value))
            this.value = value;
        else
            throw new IllegalArgumentException("illegal value for priority" + value);
    }

    @Override
    public String toString(){
        return this.value;
    }

    private int index(){
        return this.legalValues.indexOf(this.value);
    }

    public boolean higherThan(Priority other){
        return this.index() > other.index();
    }

}
{% endhighlight %}

**OrderProcessor.class**
{% highlight java linenos %}
public class OrderProcessor {

    public long numberOfHighPriorityOrders(List<Order> orders) {
        return orders.stream()
                .filter(o -> o.getPriority().higherThan(new Priority("normal")))
                .count();
    }
}
{% endhighlight %}



## 리팩토링 31. 타입 코드를 서브클래스로 바꾸기(Replace Type Code with Subclasses)

{% highlight java linenos %}
public class Employee {

    private String name;

    private String type;

    public Employee(String name, String type) {
        this.validate(type);
        this.name = name;
        this.type = type;
    }

    private void validate(String type) {
        List<String> legalTypes = List.of("engineer", "manager", "salesman");
        if (!legalTypes.contains(type)) {
            throw new IllegalArgumentException(type);
        }
    }

    public String getType() {
        return type;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
{% endhighlight %}

### Direct Inheritance
- `Employee`에는 `Engineer`, `Manager`등등이 있다면
- 직접 상속을 받아 구현하자


**Engineer.class**
{% highlight java linenos %}
public class Engineer extends Employee{
    public Engineer(String name) {
        super(name);
    }

    @Override
    public String getType(){
        return "engineer";
    }
}
{% endhighlight %}

**Employee.class**
{% highlight java linenos %}
public abstract class Employee {

    private String name;

    //private String type;

    protected Employee(String name) {
        this.name = name;
    }

    public static Employee createEmployee(String name, String type){
        switch (type) {
            case "engineer": return new Engineer(name);
            default: throw new IllegalArgumentException(type);
        }
    }

//    private void validate(String type) {
//        List<String> legalTypes = List.of("engineer", "manager", "salesman");
//        if (!legalTypes.contains(type)) {
//            throw new IllegalArgumentException(type);
//        }
//    }

    public abstract String getType();

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", type='" + getType() + '\'' +
                '}';
    }
}
{% endhighlight %}

**Test**
{% highlight java linenos %}
//assertEquals("engineer", new Employee("keesun", "engineer").getType());
assertEquals("engineer", Employee.createEmployee("keesun", "engineer").getType());
{% endhighlight %}

### Indirect Inheritance
**Employee.class**
{% highlight java linenos %}
public class Employee {

    private String name;

//    private String typeValue;

    private EmployeeType type;

    public Employee(String name, String typeValue) {
        this.name = name;
        this.type = this.getEmployeeType(typeValue);
    }

    public static EmployeeType getEmployeeType(String typeValue){
        switch (typeValue) {
            case "engineer": return new Engineer();
            default: throw new IllegalArgumentException(typeValue);
        }
    }

    //EmployeeType로 올린다
    public String capitalizedType() {
        return this.type.capitalizedType();
//        return this.typeValue.substring(0, 1).toUpperCase() + this.typeValue.substring(1).toLowerCase();
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", type='" + type.toString() + '\'' +
                '}';
    }
}
{% endhighlight %}

**Engineer.class**
{% highlight java linenos %}
public class Engineer extends EmployeeType{
    @Override
    public String toString(){
        return "salesman";
    }
}
{% endhighlight %}

**EmployeeType.class**
{% highlight java linenos %}
public class EmployeeType {
    public String capitalizedType() {
        return this.toString().substring(0, 1).toUpperCase() + this.toString().toLowerCase();
    }
}
{% endhighlight %}

**Test**
{% highlight java linenos %}
//assertEquals("engineer", new Employee("keesun", "engineer").getType());
assertEquals("engineer", new Employee("keesun", "engineer").capitalizedType());
{% endhighlight %}

## 리팩토링 32. 조건부 로직을 다형성으로 바꾸기(Replace Conditional with Polymorphism)

### before
**VoyageRating.class**
{% highlight java linenos %}
public class VoyageRating {

    private Voyage voyage;

    private List<VoyageHistory> history;

    public VoyageRating(Voyage voyage, List<VoyageHistory> history) {
        this.voyage = voyage;
        this.history = history;
    }

    public char value() {
        final int vpf = this.voyageProfitFactor();
        final int vr = this.voyageRisk();
        final int chr = this.captainHistoryRisk();
        return (vpf * 3 > (vr + chr * 2)) ? 'A' : 'B';
    }

    private int captainHistoryRisk() {
        int result = 1;
        if (this.history.size() < 5) result += 4;
        result += this.history.stream().filter(v -> v.profit() < 0).count();
        if (this.voyage.zone().equals("china") && this.hasChinaHistory()) result -= 2;
        return Math.max(result, 0);
    }

    private int voyageRisk() {
        int result = 1;
        if (this.voyage.length() > 4) result += 2;
        if (this.voyage.length() > 8) result += this.voyage.length() - 8;
        if (List.of("china", "east-indies").contains(this.voyage.zone())) result += 4;
        return Math.max(result, 0);
    }

    private int voyageProfitFactor() {
        int result = 2;

        if (this.voyage.zone().equals("china")) result += 1;
        if (this.voyage.zone().equals("east-indies")) result +=1 ;
        if (this.voyage.zone().equals("china") && this.hasChinaHistory()) {
            result += 3;
            if (this.history.size() > 10) result += 1;
            if (this.voyage.length() > 12) result += 1;
            if (this.voyage.length() > 18) result -= 1;
        } else {
            if (this.history.size() > 8) result +=1 ;
            if (this.voyage.length() > 14) result -= 1;
        }

        return result;
    }

    private boolean hasChinaHistory() {
        return this.history.stream().anyMatch(v -> v.zone().equals("china"));
    }


}
{% endhighlight %}

### after
**ChinaExperiencedVoyageRating.class**
- 조건부 로직을 갖고 있는 VoyageRating 클래스

{% highlight java linenos %}
public class ChinaExperiencedVoyageRating extends VoyageRating{

    public ChinaExperiencedVoyageRating(Voyage voyage, List<VoyageHistory> history) {
        super(voyage, history);
    }

    @Override
    protected int captainHistoryRisk(){
        int result = super.captainHistoryRisk() -2;
        return Math.max(result, 0);
    }

    @Override
    protected int voyageProfitFactor(){
        return super.voyageProfitFactor()+3;
    }

    @Override
    protected int voyageLengthFactor(){
        int result = 0;
        if (this.voyage.length() > 12) result += 1;
        if (this.voyage.length() > 18) result -= 1;
        return result;
    }

    @Override
    protected int historyLengthFactor(){
        return (this.history.size() > 10) ? 1: 0;
    }

}
{% endhighlight %}

**RatingFactory.class**
- 생성자에 무엇이 주입이 되느냐에 따라 어떤 `VoyageRating`클래스가 생성할지 정한다

{% highlight java linenos %}
public class RatingFactory {

    public static VoyageRating createRating(Voyage voyage, List<VoyageHistory> history){
        if (voyage.zone().equals("china") && hasChinaHistory(history))
            return new ChinaExperiencedVoyageRating(voyage, history);
        else{
            return new VoyageRating(voyage, history);
        }
    }

    private static boolean hasChinaHistory(List<VoyageHistory> history) {
        return history.stream().anyMatch(v->v.zone().equals("china"));
    }

}
{% endhighlight %}

**VoyageRating.class**
{% highlight java linenos %}
public class VoyageRating {

    protected Voyage voyage;

    protected List<VoyageHistory> history;

    public VoyageRating(Voyage voyage, List<VoyageHistory> history) {
        this.voyage = voyage;
        this.history = history;
    }

    public char value() {
        final int vpf = this.voyageProfitFactor();
        final int vr = this.voyageRisk();
        final int chr = this.captainHistoryRisk();
        return (vpf * 3 > (vr + chr * 2)) ? 'A' : 'B';
    }

    protected int captainHistoryRisk() {
        int result = 1;
        if (this.history.size() < 5) result += 4;
        result += this.history.stream().filter(v -> v.profit() < 0).count();
        return Math.max(result, 0);
    }

    private int voyageRisk() {
        int result = 1;
        if (this.voyage.length() > 4) result += 2;
        if (this.voyage.length() > 8) result += this.voyage.length() - 8;
        if (List.of("china", "east-indies").contains(this.voyage.zone())) result += 4;
        return Math.max(result, 0);
    }

    protected int voyageProfitFactor() {
        int result = 2;

        if (this.voyage.zone().equals("china")) result += 1;
        if (this.voyage.zone().equals("east-indies")) result +=1 ;
        result += voyageLengthFactor();
        result += historyLengthFactor();

        return result;
    }


    protected int voyageLengthFactor(){
        return (this.voyage.length() > 14 )? -1 : 0;
    }

    protected int historyLengthFactor(){
        return (this.history.size() > 8 )? 1 : 0;
    }

}
{% endhighlight %}



## [클래스 추출하기]()

## [매개변수 객체 만들기]()

# 냄새 16. 임시 필드(Temporary Field)
- 클래스에 있는 어떤 필드가 특정한 경우에만 값을 갖는 경우
- 어떤 객체의 필드가 "특정한 경우에만" 값을 가진다는 것을 이해하는 것은 일반적으로 예상하지 못하기 때문에 이해하기 어렵다.

## [클래스 추출하기]()
- 이를 통해 해당 변수들을 옮길 수 있다

## [함수 옮기기]()
- 해당 변수를 사용하는 함수를 특정 클래스로 옮길 수 있다

## 리팩토링 36. 특이 케이스 추가하기(Introduce Special Case)
- 특정한 경우 해당하는 클래스를 만들어 해당 조건을 제거할 수 있다

### before

**Site.class**
{% highlight java linenos %}
public class Site {

    private Customer customer;

    public Site(Customer customer) {
        this.customer = customer;
    }

    public Customer getCustomer() {
        return customer;
    }
}
{% endhighlight %}

**

**Customer.class**
{% highlight java linenos %}
public class Customer {

    private String name;

    private BillingPlan billingPlan;

    private PaymentHistory paymentHistory;

    public Customer(String name, BillingPlan billingPlan, PaymentHistory paymentHistory) {
        this.name = name;
        this.billingPlan = billingPlan;
        this.paymentHistory = paymentHistory;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BillingPlan getBillingPlan() {
        return billingPlan;
    }

    public void setBillingPlan(BillingPlan billingPlan) {
        this.billingPlan = billingPlan;
    }

    public PaymentHistory getPaymentHistory() {
        return paymentHistory;
    }

    public void setPaymentHistory(PaymentHistory paymentHistory) {
        this.paymentHistory = paymentHistory;
    }
}
{% endhighlight %}

**CustomerService.class**
{% highlight java linenos %}
public class CustomerService {

    public String customerName(Site site) {
        Customer customer = site.getCustomer();

        String customerName;
        if (customer.getName().equals("unknown")) {
            customerName = "occupant";
        } else {
            customerName = customer.getName();
        }

        return customerName;
    }

    public BillingPlan billingPlan(Site site) {
        Customer customer = site.getCustomer();
        return customer.getName().equals("unknown") ? new BasicBillingPlan() : customer.getBillingPlan();
    }

    public int weeksDelinquent(Site site) {
        Customer customer = site.getCustomer();
        return customer.getName().equals("unknown") ? 0 : customer.getPaymentHistory().getWeeksDelinquentInLastYear();
    }

}
{% endhighlight %}
- `unknown`은 특별한 케이스이다

### after
**UnknownCustomer.class**
{% highlight java linenos %}
public class UnknownCustomer extends Customer{

    public UnknownCustomer() {
        super("unknown", new BillingPlan(), null);
    }

    @Override
    public boolean isUnknown() {
        return true;
    }

    @Override
    public String getName(){
        return "occupant";
    }
}

{% endhighlight %}

**Customer.class**
{% highlight java linenos %}
public class Customer {

    private String name;

    private BillingPlan billingPlan;

    private PaymentHistory paymentHistory;

    public Customer(String name, BillingPlan billingPlan, PaymentHistory paymentHistory) {
        this.name = name;
        this.billingPlan = billingPlan;
        this.paymentHistory = paymentHistory;
    }

    ...

    boolean isUnknown() {
        return false;
    }
}
{% endhighlight %}

**Site.class**
{% highlight java linenos %}
public class Site {

    private Customer customer;

    public Site(Customer customer) {
        // this.customer = customer;
        this.customer = customer.getName().equals("unknown")? new UnknownCustomer(): customer;
    }

    public Customer getCustomer() {
        return customer;
    }
}

{% endhighlight %}

**CustomerService.class**
{% highlight java linenos %}
public class CustomerService {

    public String customerName(Site site) {
//        Customer customer = site.getCustomer();
//
//        String customerName;
//        if (customer.isUnknown()) {
//            customerName = "occupant";
//        } else {
//            customerName = customer.getName();
//        }
//
//        return customerName;
        return site.getCustomer().getName();
    }

    public BillingPlan billingPlan(Site site) {
//        Customer customer = site.getCustomer();
//        return customer.isUnknown() ? new BasicBillingPlan() : customer.getBillingPlan();
        return site.getCustomer().getBillingPlan();
    }

    public int weeksDelinquent(Site site) {
//        Customer customer = site.getCustomer();
//        return customer.isUnknown() ? 0 : customer.getPaymentHistory().getWeeksDelinquentInLastYear();
        return site.getCustomer().getPaymentHistory().getWeeksDelinquentInLastYear();
    }

}
{% endhighlight %}

**NullPaymentHistory, PaymentHistory**
{% highlight java linenos %}
public class NullPaymentHistory extends PaymentHistory{
    public NullPaymentHistory() {
        super(0);
    }
}

public class PaymentHistory {

    private int weeksDelinquentInLastYear;

    public PaymentHistory(int weeksDelinquentInLastYear) {
        this.weeksDelinquentInLastYear = weeksDelinquentInLastYear;
    }

    public int getWeeksDelinquentInLastYear() {
        return this.weeksDelinquentInLastYear;
    }
}

{% endhighlight %}

# 냄새 22. 데이터 클래스

## [세터 제거하기]()
## [함수 옮기기]()
## [함수 추출하기]()