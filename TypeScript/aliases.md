# aliases

타입 aliases는  새로운 타입을 정의할 수 있다. 

```tsx
type Text = string;
const name: Text = "tmdgns";

type Num = number;
type Student = {
	name: string;
	age: number;
}

const student: Student = {
	name: 'tmdgns',
	age: 12,
}

// String Literal Types;
type Name = 'name';
let ellieName: Name;

```