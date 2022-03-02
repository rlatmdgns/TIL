class ChargeCalculator {
  charge(customer, usage, provider) {}
}
const charge = (customer, usage, provider) =>
  customer.baseCharge * usage + provider.connectionCharge;

const customer = { baseRate: 100 };
const usage = 1000;
const provider = { connectionCharge: 50 };
const monthCharge = charge(customer, usage, provider);
console.log(monthCharge);
