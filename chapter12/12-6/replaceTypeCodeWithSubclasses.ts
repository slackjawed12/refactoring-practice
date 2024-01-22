// 직접상속하는 경우
class Employee {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }

  validateType(arg: string) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }

  get type() {
    return "";
  }

  toString() {
    return `${this._name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}

function createEmployee(name: string, type: string) {
  switch (type) {
    case "engineer":
      return new Engineer(name);
    case "salesperson":
      return new Salesperson(name);
    case "manager":
      return new Manager(name);
    default:
      throw new Error(`${type}라는 직원 유형은 없습니다`);
  }
}

const engineer = new Engineer("홍길동");
console.log(engineer.type);

export default {};
