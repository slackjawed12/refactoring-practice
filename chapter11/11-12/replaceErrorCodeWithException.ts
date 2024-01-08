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
let status;
try {
  status = calculateShippingCosts(orderData);
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

if (status < 0) {
  errorList.push({
    order: orderData,
    errorCode: status,
  });
}

// 호출자
function calculateShippingCosts(anOrder: Order) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) {
    // 오류 전파
    return shippingRules;
  }

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
  }

  return -23;
}

export default {};
