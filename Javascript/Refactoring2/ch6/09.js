const baseRate = (month, year) => year - 2000 + month;

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this._month, this._year) * this._quantity;
  }
  get taxableCharge() {
    return Math.max(0, this.baseCharge - (this._year - 2000) * 0.1);
  }
}

const acquireReading = () => ({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

const client1 = () => {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  return aReading.baseCharge;
};

const client2 = () => {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  return aReading.taxableCharge;
};

const client3 = () => {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
  return basicChargeAmount;
};

[client1, client2, client3].forEach((c) => console.log(c()));

/*
this._ 왜 사용 했을까? 
기술적으로 아무것도. 식별자 이름을 지정할 때 밑줄은 문자와 다르지 않습니다. 다른 언어에서는 메서드 내에서 필드와 일반 변수를 더 쉽게 구별할 수 있도록 클래스 필드에 이름을 지정하는 규칙입니다
메소드와 이름이 충돌하여 _ 붙여서 처리 
*/
