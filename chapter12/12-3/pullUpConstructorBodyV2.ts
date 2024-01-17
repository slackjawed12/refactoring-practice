class Employee {
  constructor(name) {}
  get isPrivileged() {
    return true;
  }
  assignCar() {}

  finishConstruction() {
    if (this.isPrivileged) {
      this.assignCar();
    }
  }
}

class Manager extends Employee {
  _grade;
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    this.finishConstruction();
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}

export default {};
