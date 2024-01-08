import OrderPRocessingError from "./OrderProcessingError";

class ShippingRules {
  constructor(data) {}
}
class Order {
  _country;
  constructor(country: string) {
    this._country = country;
  }
  get country() {
    return this._country;
  }
}

// 상위 호출자
let errorList: any[] = [];
const orderData = new Order("1234");
try {
  calculateShippingCosts(orderData);
} catch (e) {
  // 예외처리로직
  if (e instanceof OrderPRocessingError) {
    errorList.push({
      order: orderData,
      errorCode: e.code,
    });
  } else {
    throw e;
  }
}

// 호출자
function calculateShippingCosts(anOrder: Order) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);

  // 더 관련 없는 코드
}

const countryData = {
  shippingRules: {
    USA: {},
    KOR: {},
  },
};

function localShippingRules(country: string) {
  const data = countryData.shippingRules[country];
  if (data) {
    return new ShippingRules(data);
  } else {
    throw new OrderPRocessingError(-23);
  }
}

export default {};
