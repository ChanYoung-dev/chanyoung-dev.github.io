---
permalink: /C/Application/Calculator/CalculatorC/
title: "텍스트 파일로부터 수식들을 불러와 계산기작업하기"
toc: true
categories:
  - C🐷Application
comments: true
sidebar:
  - title: "C🐷"
  - nav: "C-menu"
tags:
  - Calculator

---

# Intro
다음의 설명을 만족하는 전자계산기 프로그램을 만든다.  
Equation.txt 라는 파일은 다음과 같은 수식이 저장되어 있다.  

> 34.5* 23.4 + 23* (32+46)  
> 34* 23.4 + 37/(32-46)  
> 78.2* 33.3 + 23* (124.5 - 46)  
> 35.3/23.4 + 25.6/(44 + 46)  
> 72.5/34.5 + 23* (32 - 78)  

​

띄어쓰기도 포함한다.

​
# 동작원리
main() 함수의 Arguments을 이용하여 파일을 읽은 후 파일 안에 있는 위의 수식을 순서대로 스택에 저장한 후 pop()함수를 이용하여 각각의 수식을 꺼내 계산한 결과 값을 보여주는 프로그램을 작성한다. 

​

실행파일의 이름은 Calculator이며 다음의 명령어로 실행되며 결과는 아래와 같이 출력한다.

​
```sh
Calculator Equation.txt
Result = -1055.898551
Result = 1.792991
Result = 4409.560000
Result = 792.957143
Result = 2601.300000
```

​
# 조건
- 소스프로그램은 표준 C로 컴파일 및 실행이 되어야 한다. 
- ANSI C 표준을 준수해야 하며 어떤 플래솜에서든지 동작해야 한다. 매킨토시, 리눅스, 라즈베리파이와 윈도우즈 등 어떤 운영체제에서도 동작하도록 프로그래밍한다.

# 알고리즘
Calculator Equation.txt를 터미널에서 입력하면  
int main(int argc, char* argv[])에서  
파일이름(Equation.txt)이 argv[1]으로 입력되고 exp에 복사한다.  
복사한 exp를 check함수에 입력인자로 입력된다.  

즉, check("Equation.txt")로 입력된다.  

check함수에는 파일내용에서의 내용을 한글자씩 읽어 string[]으로 입력된다. string[]=ch  
파일에서 '\n'을 만날 경우 해당 줄을 계산기로 돌린다.  

# 예)
>1 . '\n'이나 파일의 끝 EOF을 만나면 string[p]~string[i-1]까지인 34.5* 23.4 + 23*(32+46)를 계산기로 돌린다.  
>2 . 그뒤 계산 값 result를 result_array배열에 입력한다.  
>3 . 그 뒤 다음 줄로 넘어가고 또다시 '\n'을 만나면 해당 줄을 또 계산기로 돌린다.  
>4 . 또 계산결과 값을 result_array배열에 입력하고  
>5 . 위 과정을 반복한다.  
>6 . 문장의 끝 EOF를 만나면 반복문을 탈출한다.  
>7 . result_array배열을 출력한다.  

# 코드


```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define MAX_STACK_SIZE 1000
#define PLUS (double)0x7fffffff
#define MINUS (double)0x7ffffffe
#define MULTIFLY (double)0x7ffffffd
#define DIVIDE (double)0x7ffffffc
#define L_BRACKETS (double)0x7ffffffb
#define R_BRACKETS (double)0x7ffffffa //사용자가 키보드로 입력할 수 없는 값(32비트 부호있는 최대 양수 값 10진수 2,147,483,647)의 숫자)으로 연산자를 설정
typedef double Element; // 스택 요소의 자료형 정의
Element data[MAX_STACK_SIZE]; // 실제 스택요소의 배열
int top; // 실제 스택의 top
Element tmp_data[MAX_STACK_SIZE]; // 임시스택요소의 배열
int tmp_top; //임시 스택의 top

// 학교에서 배운 스택이용함수
void error(char str[])
{
  printf("%s\n", str);
  exit(1);
}

void init_stack() { top = -1; }
int is_empty() { return top == -1; }
int is_full() { return top == MAX_STACK_SIZE - 1; }
int size() { return top + 1; }
void push(Element e){
if (is_full())
  error("스택 포화 에러");
  data[++top] = e;
}

Element pop() {return data[top--];}
Element peek() {return data[top];}

//현재 스택이 가르키는 TOP에 값을 입력
void push_current(Element e){data[top]=e;}

// 임시스택이용함수
void tmp_init_stack() { tmp_top = -1; }
int tmp_is_empty() { return tmp_top == -1; }
int tmp_is_full() { return tmp_top == MAX_STACK_SIZE - 1; }
int tmp_size() { return tmp_top + 1; }
void tmp_push(Element e)
{
  if (tmp_is_full())
  error("스택 포화 에러");
  tmp_data[++tmp_top] = e;
}
Element tmp_pop() {
  return tmp_data[top--];
}
Element tmp_peek()
{
  return tmp_data[tmp_top];
}

//현재 임시스택이 가르키는 TOP에 값을 입력
void tmp_push_current(Element e)
{
  tmp_data[tmp_top]=e;
}

int check(char filename[]){
    int i; // string 배열 입력에 사용할 반복문 변수 , string[i]
    int result_i=0; // result 배열 입력에 사용할 반복문 변수 , result_array[result_i]
    char ch; // 파일포인터 fp로부터 파일문자를 ch에 입력 , ch = fgetc(fp);
    int k; // string[k]마다 검사하여 계산기를 돌린다.
    int p=0; // string[p]~string[i-1]까지 계산기를 돌린다.
    char string[300]; // 문자열을 저장하는 배열
    double result_array[5]; //result를 저장해놓은 배열
    FILE *fp = fopen(filename, "r"); //파일읽기모드
    //파일이름이 없는 경우

    if (fp == NULL) {
        printf("%s 이란 파일은 없습니다!!\n",filename);
        return -1;
    }

    //파일에 있는 내용을 string[i]로 한글자씩 입력
    for (i = 0; (i < (sizeof(string)-1)); i++) {
        ch = fgetc(fp); // 파일내용을 ch로 한글자씩 입력
        string[i] = ch; // ch를 string배열에 입력
        /*
        '\n'이나 EOF를 만났을 경우 계산기를 시작한다.
        */

        if(ch=='\n' || ch == EOF){
            init_stack(); //실스택초기화
            for (k=p; string[k] != '\n'&&string[k] != EOF; k++) // string[p]부터 문자열 EOF나 \n을 만날때까지 계산기를 돌린다.
            {
                if (string[k] == ' ') continue; //스페이스바를 만나면 반복문을 다음으로 넘어간다.
                if (string[k] >= '0' && string[k] <= '9') // 숫자를 만났을때
                {
                    int integerN = 0; // 정수
                    double primeN = 0; // 소수
                    int j = k; //현재 문자열 k번째를 j에 입력
                    char checkpoint = 0; //소수점상태 0이면 안만났고 1이면 만났으므로 소수를 구한다.
                    // 숫자가 무엇인지 파악하는 반복문
                    while (j < strlen(string) && ((string[j] >= '0' && string[j] <= '9') || string[j] == '.'))
                    {
                        if (string[j] == '.') // .을 만나면 checkpoint = 1로 초기화 한 뒤 넘어간다.
                        {
                            checkpoint = 1;
                            j++;
                        }
                        else
                        {
                            if (checkpoint == 0) // 0을 만나면 정수의 한자리씩 구해준다.
                            {
                                integerN *= 10;
                                integerN += (string[j] - '0');
                                j++;
                            }
                            else // checkpoint가 1인경우 소수를 구해준다.
                            {
                                primeN *= 10;
                                primeN += (string[j] - '0');
                                j++;
                            }
                        }
                    }
                    k = j - 1;
                    while (primeN > 1) primeN /= 10; // 소숫점을 맞쳐준다. 425->0.425
                    double number = integerN + primeN; // 정수와 소수를 더해준다. 30+0.425 ->30.425
                    //스택 top에 곱셈이나 나눗셈이 있다면 앞선 숫자 number와 곱셈/나눗셈 스택 밑에 있는 숫자와 연산처리를 해준다.
                    if (top>=0&&(peek() == MULTIFLY || peek() == DIVIDE))
                    {
                        if (pop() == MULTIFLY)push_current(peek()*number); // data[top-1]의 숫자와 now를 곱셈쳐리
                        else push_current(peek()/number); // data[top-1]의 숫자와 now를 나눗셈쳐리
                    }
                    else push(number); // 곱셈,나눗셈이 없는 경우 스택에 숫자 삽입
            }
            else if (string[k] == '(') push(L_BRACKETS); // '(' 를 만난경우 스택에 L_BRACKETS을 입력
            // ')'를 만난 경우 '('부터 ')'까지 연산처리를 해준다.
            else if (string[k] == ')')
                {
                // '(' ~ ')'까지 숫자들을 연산처리하기 위해선 현재의 사용중인 스택을 사용할 수 없으므로 임시 스택을 사용한다.
                tmp_init_stack(); // 임시스택초기화
                //현재 실제스택에 있는 ( ~ ) 사이 값들을 역배열시켜 임시스택에 삽입해준다.
                while (peek() != L_BRACKETS)
                tmp_push(pop());
                top--; // 현재스택을 '('있는 위치 바로 아래 스택위치로 이동한다.
                double result = 0; //( ~ ) 의 연산처리한 결과값을 넣을 변수
                int PlusMinusStatus = 1; // 1일때 + , 0일때 - 연산
                // 임시스택의 쌓인 데이터를 연산처리를 해준다. ( ~ ) 에서의 곱셉 나눗셈은 148~153줄까지 연산처리를 해주어 +,-밖에 없다.
                while (tmp_top >= 0) //임시스택 데이터가 있는 경우
                {
                    if (tmp_peek() == PLUS || tmp_peek() == MINUS ) // 임시스택의 top 데이터가 +나 -인경우
                    {
                        if (tmp_peek() == PLUS) PlusMinusStatus = 1; // 임시스택 top데이터가 +인경우 +로 진행한다.
                        else PlusMinusStatus = -1; // 나머지경우 -로 진행한다.
                    }
                    else result += (PlusMinusStatus)*(tmp_peek()); // +,- 연산결과를 숫자저장
                    tmp_top--; //임시스택위치를 한칸씩 내려감
                }
                // 연산 결과가 나왔다.
                // number * ( ~ ) 경우를 위해 다음과 같이 처리를 해준다. 왜냐하면 *은 *뒤에 숫자가 나올경우만 위 코드 148~153줄까지를 통해 연산처리해준다.
                if (top>=0&&(peek() == MULTIFLY || peek() == DIVIDE))
                {
                    if (pop() == MULTIFLY)push_current(peek()*result); // data[top-1]의 숫자와 now를 곱셈쳐리
                    else push_current(peek()/result); // data[top-1]의 숫자와 now를 나눗셈쳐리
                }
                else push(result); // 곱셈,나눗셈이 없는 경우 스택에 숫자 삽입
                }
                else if (string[k] == '+' || string[k] == '-' ||string[k] == '*' || string[k] == '/') // 연산자를 만나면 실제스택에 삽입
                {
                    if (string[k] == '+') push(PLUS);
                    else if (string[k] == '-') push(MINUS);
                    else if (string[k] == '*') push(MULTIFLY);
                    else push(DIVIDE);
                }
                else
                {
                    printf("이상한 입력이 있습니다."); // string[k]가 연산자나 숫자나 .이나 스페이스가 아닌 경우
                    return -1;
                };
            }
            // ( ~ )와 곱셉/나눗셈을 처리했으니 남은 스택데이터들은 숫자와 +/-들 값이다.
            // 남은 스택에 있는 숫자들을 연산처리하기 위해선 현재의 사용중인 스택을 사용할 수 없으므로 임시 스택을 사용한다.
            tmp_init_stack(); //임시스택초기화
            //현재 실제스택에 있는 남은 데이터 값들을 역배열시켜 임시스택에 삽입해준다.
            while (top>=0 )
            tmp_push(pop());
            double result = 0; //남은 스택 데이터들의 연산처리한 결과값을 넣을 변수
            int PlusMinusStatus = 1; // 1일때 + , 0일때 - 연산
            // 임시스택의 쌓인 마지막 남은 데이터값들를 연산처리를 해준다.
            while (tmp_top >= 0) // 임시스택에 데이터가 있을경우
            {
                if (tmp_peek() == PLUS || tmp_peek() == MINUS ) // 임시스택의 top위치가 플러스나 마이너스일경우
            {
                if (tmp_peek() == PLUS) PlusMinusStatus = 1; // 임시스택 top데이터가 플러스일 경우 +로 진행
                else PlusMinusStatus = -1; // 나머지경우 -로 진행한다.
            }
                else result += (PlusMinusStatus)*(tmp_peek()); // +,- 연산결과를 숫자저장
                tmp_top--; //임시스택위치를 한칸씩 내려감
            }
            result_array[result_i]=result; //최종결과 값을 result배열에 넣어준다.
            result_i++; //index를 올려준다.
            p=i+1; // i위치는 '\n'을 만났을 때이므로 i+1은 다음문단의 시작부분이다. 즉,다음 반복문에선 string[p]부터 시작된다.
        }
        if(ch == EOF)break; // 계산기를 전부 돌리고, EOF의 경우 탈출한다.
    }
    //result들을 출력한다. 하지만 순서대로 보여주지말고 역순서대로 보여주는게 시험이었으므로 5,4,3,2,1번째 결과 값으로 보여준다.
    for(result_i=4;result_i>=0;result_i--) {
        printf("Result : %lf\n",result_array[result_i]); //result들을 출력한다.
    }
    string[i] = '\0'; //문장의 끝
    fclose(fp); // 파일 스트림을 닫아준다.
    return 0;
}
int main(int argc, char* argv[]) {
    char exp[1000]; //파일이름을 저장할 배열
    memset(exp, 0, sizeof(exp)); // 특정 주소지에 있는 값을 0으로 초기화
    int errorCode; //check함수의 반환값을 저장할 변수
    // 터미널창에서 ./Calculator 만 했을 경우
    if(argc==1){
        printf("파일이름 입력 :");
        scanf("%s", exp); //exp에 파일입력을 저장
        errorCode=check(exp); // check함수를 돌린다.
    }
    // 터미널창에서 ./Calculator Equation.txt 했을 경우
    else if(argc == 2){
        strcpy(exp, argv[1]); //파일이름(Equation.txt)이 exp에 저장된다.
        errorCode=check(exp); //check함수를 돌린다.
    }
    //성공했을시
    /*
    * if(errorCode==0)printf("성공!");
    * else
    * printf("계산기 함수 실패");
    */
    return 0; //반환값
}
```