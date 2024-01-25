class Party {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }

  get monthlyCost() {
    return 0;
  }
}

class Employee extends Party {
  _id: number;
  _monthlyCost: number;
  constructor(name: string, id: number, monthlyCost: number) {
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
}

class Department extends Party {
  _staff: Employee[];
  constructor(name: string, staff: Employee[]) {
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
}

export default {};

const employee = new Employee("홍길동", 1, 10000);
console.log(employee.annualCost);
