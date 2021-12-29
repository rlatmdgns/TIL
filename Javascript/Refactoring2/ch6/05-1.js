// import assert from "assert";
// class Book {
//   _reservations = [];

//   get reservation() {
//     return this._reservations;
//   }

//   addReservation(customer) {
//     this.zz_addReservation(customer, false);
//   }
//   zz_addReservation(customer, isPriority) {
//     assert(typeof isPriority ==='boolean');
//     this._reservations.push(customer);
//   }
// }

// const bookcafe = new Book();
// bookcafe.addReservation({ name: "roy" });
// bookcafe.addReservation({ name: "jay" });
// console.log(bookcafe.reservation);

import assert from "assert";
class Book {
  _reservations = [];

  get reservation() {
    return this._reservations;
  }

  addReservation(customer, isPriority) {
    assert(typeof isPriority === "boolean");
    this._reservations.push(customer);
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ name: "roy" }, false);
bookcafe.addReservation({ name: "jay" }, true);
console.log(bookcafe.reservation);
