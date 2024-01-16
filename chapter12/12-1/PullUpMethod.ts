class Party {
  monthlyCost: number;
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  monthlyCost: number;
  constructor(monthlyCost: number) {
    super();
    this.monthlyCost = monthlyCost;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  monthlyCost: number;
  constructor(monthlyCost: number) {
    super();
    this.monthlyCost = monthlyCost;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}
