# function

```jsx
//js
function jsAdd(num1, num2){
	return num1 + num2;
}
//ts
function add(num1: number, num2: number): number{
	return num1 + num2;
}
//add(num1: number, num2: number): number <- 숫자를 반환한다.

//js
function jsFetchNum(id){
	//code...
	return new Promise(reslove, reject) => {
		resolve(100);
	}
}

//ts
function fetchNum(id: string): Promise<number>{
	//code...
	return new Promise(reslove, reject) => {
		resolve(100);
	}
}
//Promise<number> 를 리턴한다
```

## 함수 타입 이용

```jsx
//Optional parameter
function printName(firstName: string, lastName?: string){
	console.log(firstName);
	console.log(lastName);
}
//lastName? 전달해두되고 안해두되고 ~ 
printName('김', '승훈');
printName('김',); //김 , undifined

//Default parameter
function printMessage(message: string="hi"){
	console.log(message);
}

//Rest parameter
function(...numbers:number[]): number{
	return numbers.reduce((a,b) => a + b)
}
console.log(addNumbers(1,2));
```