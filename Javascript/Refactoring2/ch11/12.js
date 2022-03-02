class ShippingRules {
  data;
  constructor(data) {
    this.data = data;
  }
}
const countryData = {
  shippingRules: {
    US: 10,
    CA: 7,
  },
};
const errorList = [];

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류 ${errorCode}`);
    this.code = errorCode;
  }
  get name() {
    return "OrderProcessingError";
  }
}

const localShippingRules = (country) => {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
};
const calculateShippingCosts = (order) => {
  // 관련 없는 코드
  const shippingRules = localShippingRules(order.country);
  // 관련 없는 코드
};
const execute = (order) => {
  try {
    calculateShippingCosts(order);
  } catch (error) {
    if (error instanceof OrderProcessingError) {
      errorList.push({ order, errorCode: error.code });
    } else {
      throw error;
    }
  }
};

execute({ country: "US" });
execute({ country: "CA" });
execute({ country: "KO" });

console.log(errorList);
