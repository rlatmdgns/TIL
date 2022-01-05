class TrackingInformation {
  _shippingCompany;
  _trackingNumber;

  get shippingCompany() {
    this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}

class Shipment {
  _trackingInformation;
  constructor() {
    this._trackingInformation = new TrackingInformation();
  }
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}

const client1 = () => {
  const aShipment = new Shipment();
  const vendor = { name: "A-SHIP", number: "010-1234-5678" };
  aShipment.shippingCompany = vendor.name;
  aShipment.trackingNumber = vendor.number;
  return aShipment.trackingInfo;
};
console.log(client1());
