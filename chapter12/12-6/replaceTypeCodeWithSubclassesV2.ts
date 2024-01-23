// 간접 상속하는 경우
class Employee {
  _name: string;
  _type: EmployeeType;
  constructor(name: string, type: EmployeeType) {
    this._name = name;
    this._type = type;
  }

  toString() {
    return `${this._name} (${this._type.capitalizedName})`;
  }

  get type() {
    return this._type;
  }

  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer":
        return new Engineer();
      case "manager":
        return new Manager();
      case "salesperson":
        return new Salesperson();
      default:
        throw new Error(`${aString}라는 직원 유형은 없습니다.`);
    }
  }
}

class EmployeeType {
  get capitalizedName() {
    return (
      this.toString().charAt(0).toUpperCase() +
      this.toString().substring(1).toLowerCase()
    );
  }
}
class Engineer extends EmployeeType {
  toString() {
    return "engineer";
  }
}
class Manager extends EmployeeType {
  toString() {
    return "manager";
  }
}
class Salesperson extends EmployeeType {
  toString() {
    return "salesperson";
  }
}

export default {};
