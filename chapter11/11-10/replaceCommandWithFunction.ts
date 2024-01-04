// 명령을 함수로 바꾸기 - 명령 메서드의 복잡성이 크지 않으면 단일 함수로 추출하는 것이 낫다.
class ChargeCalculator {
  _customer;
  _usage;
  _provider;
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }

  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }

  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}
