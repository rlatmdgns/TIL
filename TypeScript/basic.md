# basic

```jsx
/*
Primitive : number, strung, boolean, bigint,
symbol, null, undefined

Object: funticion, array
*/

//numbemr 
const num: number = 10;

//string 
const str: string = "hello";

//boolean 
const boal: boolean = false;

//undefined - 정의되지 않는 상태
let age: number | undefined;
age = undfined;
age = 1;
//옵셔널 타입일 경우 이런 식으로 작성
function find():number | undifined {
	return;
}// 찾으면 숫자를 리턴 아니면 언디파인드

//null - 직접적으로 빈값을 넣어준 것 
let person: null;💩
let person:string | null;

// unknown 💩
let unknown: unknown = 0
//무슨 타입이 잘들어올지 모르겠다.

//any 💩
let anything: any = 0;
// 어떤 것이든 드루와라

//void - 생략 가능
function print: void(){
	console.log('hello');
	return; //생략 가능
}
let unusable: void = undefined //💩 
//아무것도 return 하지 않으면 void

// never -리턴하지 않는 함수 
function throwError(message: string): never{
	//throw new Error(message);
	//while(true){}
}

//object 
let obj: object;💩
function acceptSomeObject(obj: object){
}

//💩  - 가능한 자제 
```