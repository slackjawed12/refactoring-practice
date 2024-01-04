// 명령을 함수로 바꾸기 - 명령 메서드의 복잡성이 크지 않으면 단일 함수로 추출하는 것이 낫다.
class ChargeCalculator {
  constructor(customer, usage, provider) {}

  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }
}

// 호출자
const customer = {
  baseRate: 1.0,
};
const usage = "";
const provider = {
  connectionCharge: 100,
};

let monthCharge = charge(customer, usage, provider);
// ...

function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider).charge(
    customer,
    usage,
    provider
  );
}
