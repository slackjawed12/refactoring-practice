class Party {
  _name;
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

class Employee extends Party {
  _id;
  _monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {
    return this._monthlyCost;
  }

  get id() {
    return this._id;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  _staff;
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }

  get staff() {
    return this._staff.slice();
  }

  get monthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }

  get headCount() {
    return this.staff.length;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

export default {};
