class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }
  get name() {
    return this.#name;
  }
  get genderCode() {
    return this.#genderCode;
  }
  isMale() {
    return this.#genderCode === "M";
  }
}
class Male extends Person {
  get genderCode() {
    return "M";
  }
}
class Female extends Person {
  get genderCode() {
    return "F";
  }
}

const createPerson = (record) => {
  switch (record.gender) {
    case "M":
      return new Male(record.name, "M");
    case "F":
      return new Female(record.name, "F");
    default:
      return new Person(record.name, "X");
  }
};

const loadFromInput = (data) => data.map((record) => createPerson(record));
const data = [
  {
    name: "승훈",
    gender: "M",
  },
  {
    name: "신영",
    gender: "F",
  },
];

const males = loadFromInput(data)
  .filter((p) => p.isMale())
  .map((m) => m.name);
console.log(males);
