class Party {
  monthlyCost: number;
  get annualCost() {
    return this.monthlyCost * 12;
  }
  // get monthlyCost() {
  //   throw new SubclassResponsibilityError();
  // }
}

class Employee extends Party {
  monthlyCost: number;
  constructor(monthlyCost: number) {
    super();
    this.monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  monthlyCost: number;
  constructor(monthlyCost: number) {
    super();
    this.monthlyCost = monthlyCost;
  }
}
