class Employee {
  _quota;
}

class Engineer extends Employee {}

class Salesperson extends Employee {
  get quota() {
    return this._quota;
  }
}
