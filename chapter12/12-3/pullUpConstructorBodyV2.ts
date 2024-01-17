class Employee {
  constructor(name) {}
  get isPrivileged() {
    return true;
  }
  assignCar() {}
}

class Manager extends Employee {
  _grade;
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    if (this.isPrivileged) {
      this.assignCar();
    }
  }

  get isPrivileged() {
    return this._grade > 4;
  }

  finishConstruction() {
    if (this.isPrivileged) {
      this.assignCar();
    }
  }
}

export default {};
