export class Site {
  _customer: Customer | string;
  constructor(customer) {
    this._customer = customer;
  }
  get customer() {
    return this._customer === "미확인 고객"
      ? new UnkownCustomer()
      : this._customer;
  }
}

export class Customer {
  _name;
  _billingPlan;
  _paymentHistory;
  constructor(name, billingPlan, paymentHistory) {
    this._name = name;
    this._billingPlan = billingPlan;
    this._paymentHistory = paymentHistory;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {}

  get paymentHistory() {
    return this._paymentHistory;
  }

  get isUnknown() {
    return false;
  }
}

/**
 * javascript 동적 타이핑 특성 상 서브클래스로 만들지 않는 것이 나음
 * 특이 케이스 객체는 값 객체로, 불변이다.
 */
export class UnkownCustomer {
  get isUnknown() {
    return true;
  }
  get name() {
    return "거주자";
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }
  set billingPlan(arg) {} // 무시

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

export class NullPaymentHistory {
  get weeksDeliquentInLastYear() {
    return 0;
  }
}

export default {};
