class Employee {
  _quota;
}

class Engineer extends Employee {
  get quota() {
    return this._quota;
  }
}

class Salesperson extends Employee {
  get quota() {
    return this._quota;
  }
}
