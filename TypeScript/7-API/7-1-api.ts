// Array;
// [1,2].map

type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: true },
];
// every는 하나라도 false이면 false
const result = students.every((student) => {
  return student.passed;
});

console.log(result);
