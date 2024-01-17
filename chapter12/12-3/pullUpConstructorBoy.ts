class Party {
  _name;
  constructor(name) {
    this._name = name;
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
}

class Department extends Party {
  _staff;
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }
}

export default {};
