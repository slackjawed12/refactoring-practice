class Order {
  _number: number;
  _customer: Customer;

  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }
  get customer() {
    return this._customer;
  }
}

class Customer {
  _id: number;
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
