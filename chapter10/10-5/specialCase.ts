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
}

export default {};
