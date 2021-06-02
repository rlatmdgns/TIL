# Prototype

![https://images.velog.io/images/rlatmdgns94/post/26c555d5-6333-499c-bdc3-c96feab66c2e/image.png](https://images.velog.io/images/rlatmdgns94/post/26c555d5-6333-499c-bdc3-c96feab66c2e/image.png)

많은 글들이 protype을 설명할 때 class의 상속을 섞어서 설명한다

> prototype != 상속
자바스크립트에서 복사를 통한 상속은 없다.

> prototype은 클래스, 객체의 내용 복사 없이도 상속을 구현할 수 있게 해주는 방법이다.프토로타입은 연결이다.

**자바스크립트에서는 클래스가 없다!**

### 클래스가 없다면 객체를 어떻게 설계대로 찍어낼 수 있을까?

클래스 : 객체를 찍어내는 틀

```
class person{
	constructor(name){
   	  this.name = name;
    }

    sayHello(){
    	console.log(`${this.name} : hello`);
    }
}

function Person(name){
	this.name = name;
    this.sayHello = function(){
    	console.log(`${this.name} :hello`)
    }
}

```

실제로 실행되는 코드는 클래스가 아니다 !! 클래스가 함수 프로토타입으로 변환되어 실행

### 클래스가 아니라면 return이 없는데 객체가 어떻게 생성되는 걸까?

> new 연산자가 새로운 빈 객체 메모리 상에 생성함

1. 생성된 빈 객체가 this에 바인딩 (person 함수안에 )
2. this 객체의 속성에 채우는 동작이 수행됨 (안에 내용 실행)
3. return 하는 것이 없다면 그렇게 만들어진 this가 return 됨

### 복사를 없이 어떻게 상속을 수행할 수 있는 것인가 ?

일반적인 클래스에서는 하나의 클래스가 부모의 클래스로 상속을 받게되면 자식 클래스로 인해 만들어진 인스턴스에는 부모와 자식 모두의 내용이 합쳐진 부모의 내용이 자식클래스에 복사되어들어간 내용이 인스턴스에 반영된다.

> ** 자바스크립트에서는 불가능**
상속이 복사를 의미하면 그런의미에 상속은 자바스크립트에서는 불가능
코드 자체를 복사하는 깊은 복사를 못한다.

> 자바스크립트에서 복사할 수 있는 거는 원기값, 객체의 참조값
이것을 흉내내기위해 "proto" 를 사용
"proto" = 객체와 객체를 연결하는 링크

1. 다른 객체를 바탕으로 만들어진 객체라면
객체는 자신의 원형이라고 할수 있는 객체가 있다면 그 객체를 가리키는 "**proto**"링크를 자동으로 가짐

```
const obj = Object.create(oldObj)
const obj.__proto__ === oldObj

```

1. 그냥 객체가 아니라 함수라면 (함수객체)
2. new 연산자와 함수로 만들어진 객체

## 프로토타입 체이닝이란?

proto를 따라 탐색하기

![https://images.velog.io/images/rlatmdgns94/post/6285bdb0-7ef6-402a-9512-1eb72951070d/image.png](https://images.velog.io/images/rlatmdgns94/post/6285bdb0-7ef6-402a-9512-1eb72951070d/image.png)

![https://images.velog.io/images/rlatmdgns94/post/ab654bd5-8b1e-47de-ba4f-bca1bcb9576b/image.png](https://images.velog.io/images/rlatmdgns94/post/ab654bd5-8b1e-47de-ba4f-bca1bcb9576b/image.png)

프로토링크를 통해 탐색하여 속성을 사용

> chris.sayHello 내부에서 많은 일이 일어남
chris에서 sayHello 있는지 없는 지 찾음 => 없으면 proto를 통해 person 함수객체로 이동해서 거기서 있는지 없는지 찾음

새롭게 할당할 때는 어떤일이 일어날까 ?
경우따라 달라진다 :

1. 엄격모드에서 에러
2. 비염격 모드에서는 아무일 없다

이 글은 우아한테크 크리스님 강의 내용입니다.
[https://www.youtube.com/watch?v=RYxgNZW3wl0](https://www.youtube.com/watch?v=RYxgNZW3wl0)