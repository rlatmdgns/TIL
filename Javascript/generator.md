# 제너레이터(generator) & 이터레이션

필자는 리덕스 사가를 적용하려고 제네레이터를 공부하게 되었습니다.~!~~

제너레이터(Generator) 함수는 이터러블을 생성하는 함수이다.

제너레이터 함수를 사용하면 이터레이션 프로토콜을 준수해 이터러블을 생성하는 방식보다 **간편하게** **이터러블**을 구현할 수 있다. 또한 **제너레이터 함수는 비동기 처리**에 유용하게 사용된다.

재네레이터를 배우기 전 이터레이션 프로토콜에 대해 알아보자 ! 

## 이터레이션 프로토콜 ?

ES6에서 도입된 이터레이션 프로토콜(iteration protocol)은 **데이터 컬렉션을 순회하기 위한** 프로토콜(미리 약속된 규칙)이다

**이터레이션 프로토콜을 준수한 객체는 for…of 문으로 순회할 수 있고 Spread 문법의 피연산자가 될 수 있다.**

위 조건에 해당이 되지 않으면 이터러블 프로토콜을 준수한 이터러블이 아니다.!!!!!

---

### 이터러블

이터러블은 Symbol.iterator 메소드를 구현하거나 프로토타입 체인에 의해 상속한 객체를 말한다.

```jsx
const arr = [1,2,3,4]; //배열은 이터러블 프로토콜을 준수한 이터러블이다.

// Symbol.iterator 메소드는 이터레이터를 반환한다.
const iterator = arr[Symbol.iterator]();

// 이터레이터 프로토콜을 준수한 이터레이터는 next 메소드를 갖는다.
console.log('next' in iterator); // true

// 이터레이터의 next 메소드를 호출하면 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다.
let iteratorResult = iterator.next();
console.log(iteratorResult); // {value: 1, done: false}
```

일반 객체는 for of 문에서 순회가 불가능하여 이터러블이 아니다 .

```jsx
const obj = { a: 1, b: 2 };

// 일반 객체는 Symbol.iterator 메소드를 소유하지 않는다.
// 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
console.log(Symbol.iterator in obj); // false

// 이터러블이 아닌 일반 객체는 for...of 문에서 순회할 수 없다.
// TypeError: obj is not iterable
for (const p of obj) {
  console.log(p);
}
```

---

### 이터레이터

이터레이터 프로토콜은 **next** 메소드를 소유한다. 

이터레이터 ⇒ next 메소드를 호출하면 이터러블을 순회하며, value,done 프로퍼리를 갖는 이터레이터 result 객체를 반환 하는 것  

> **이터러블  = Symbol.iterator 메소드를 구현하거나 프로토타입 체인에 의해 상속한 객체**

```jsx
// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const array = [1, 2, 3];

// Symbol.iterator 메소드는 이터레이터를 반환한다.
const iterator = array[Symbol.iterator]();

// 이터레이터 프로토콜을 준수한 이터레이터는 next 메소드를 갖는다.
console.log('next' in iterator); // true

// 이터레이터의 next 메소드를 호출하면 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다.
// next 메소드를 호출할 때 마다 이터러블을 순회하며 이터레이터 리절트 객체를 반환한다.
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### 정리

**이터러블  -**  Symbol.iterator 메소드를 구현하거나 프로토타입 체인에 의해 상속한 객체

**이터레이터** =  next 메소드를 호출하면 이터러블을 순회하며, value,done 프로퍼리를 갖는 이터레이터 result 객체를 반환 하는 것  

출처 : [https://poiemaweb.com/es6-iteration-for-of](https://poiemaweb.com/es6-iteration-for-of)

## 제네레이터

제네레이터 함수를 만들려면 `function*(){}` 로 작성해야합니다.

```jsx
function* generate() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generate();
console.log(generator); // [object Generator]
/*
재네레이터 함수는 호출하면 코드가 실행되지 않고 대신 실행하는 제네레이터객체가
반환됩니다.
*/
```

next()는 제네레이터의 주요메서드 ! 

**`next()`**를 호출하면 가장 가까운 **`yield <value>`**문을 만날 때까지 실행이 지속한다. (value를 생략할 수도 있는데 이경우에는 undifined가 반환) 

**`yield` 문을 만나면 실행이 멈추고 산출하고자 하는 값이 반환된다.**

`next()`는 항상 아래 두 프로퍼티를 가진 객체를 반환합니다.

- `value`: 산출 값
- `done`: 함수 코드 실행이 끝났으면 `true`, 아니라면 `false`

[https://ko.javascript.info/generators](https://ko.javascript.info/generators)

무한 ?

[https://velog.io/@bigbrothershin/JavaScript-제너레이터Generator](https://velog.io/@bigbrothershin/JavaScript-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0Generator)

### 비동기 이터레이션

[https://ko.javascript.info/async-iterators-generators](https://ko.javascript.info/async-iterators-generators)