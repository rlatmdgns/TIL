# array

```tsx

//Array
const fruits: string[] = ["사과", "바나나"];
const scroes: Array<number> = [1,2,3,4,5];

function printArray(furits: readonly string[]){
	//readonly 읽기만 가능 
}

//Tuple - 서로 다른 타입을 가질 수 있는 배열.
let student: [string, number];
student = ['name', 123];
// Tuple 권장하지 않음.. 밑에처럼 접근하면 가독성 떨엊
student[0]// name
const [name, age] = student;

```