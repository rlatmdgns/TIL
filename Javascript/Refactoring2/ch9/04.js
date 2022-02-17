import { it } from "mocha";
import assert from "assert";
class TelephoneNumber {
  #areaCode;
  #number;
  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }
  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
  }
  equals(other) {
    if (!(other instanceof TelephoneNumber)) return false;
    return this.#areaCode === other.#areaCode && this.#number === other.#number;
  }
}

class Person {
  #telephoneNumber;
  constructor() {
    this.#telephoneNumber = new TelephoneNumber();
  }
  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this.#telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }
  get officeNumber() {
    return this.#telephoneNumber.number;
  }
  set officeNumber(arg) {
    this.#telephoneNumber.number = new TelephoneNumber(
      this.officeAreaCode,
      arg
    );
  }
}

const p = new Person();
p.officeAreaCode = "312";
p.officeNumber = "555-0142";
console.log(p.officeAreaCode, p.officeNumber);

// it("telephone equals", () => {
//   assert(
//     new TelephoneNumber("312", "555-0142").equals(
//       new TelephoneNumber("312", "555-0142")
//     )
//   );
// });
