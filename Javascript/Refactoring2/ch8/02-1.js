class Customer {
  _name;
  _contract;

  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date(), discountRate);
  }
  get discountRate() {
    return this._contract.discountRate;
  }
  becomePreferred() {
    this._contract.discountRate += 0.03;
    // do other stuff
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  _startDate;
  _discountRate;

  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(number) {
    this._discountRate = number;
  }
}

const customer1 = new Customer("승훈", 0.1);
customer1.becomePreferred();
console.log(customer1.discountRate);
