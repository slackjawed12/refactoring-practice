// 간접 상속하는 경우
class Employee {
  _name: string;
  _type: EmployeeType;
  constructor(name: string, type: string) {
    this.validateType(type);
    this._name = name;
    this.type = type;
  }

  validateType(arg: string) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }
  get typeString() {
    return this._type.toString();
  }

  get type() {
    return this._type;
  }

  set type(arg: string) {
    this._type = new EmployeeType(arg);
  }

  get capitalizedType() {
    return (
      this.typeString.charAt(0).toUpperCase() +
      this.typeString.substring(1).toLowerCase()
    );
  }

  toString() {
    return `${this._name} (${this.capitalizedType})`;
  }
}

class EmployeeType {
  _value: string;
  constructor(aString: string) {
    this._value = aString;
  }

  toString() {
    return this._value;
  }
}

export default {};
