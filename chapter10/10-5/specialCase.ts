export class Site {
  _customer: Customer;
  constructor(customer) {
    this._customer = customer;
  }
  get customer() {
    return this._customer;
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

  get isUnkown() {
    return false;
  }
}

/**
 * javascript 동적 타이핑 특성 상 서브클래스로 만들지 않는 것이 나음
 */
export class UnkownCustomer {
  get isUnknown() {
    return true;
  }
}

export function isUnknown(arg) {
  if (!(arg instanceof Customer || arg === "미확인 고객")) {
    throw new Error(`잘못된 값과 비교 : <${arg}>`);
  }

  return arg === "미확인 고객";
}
export default {};
