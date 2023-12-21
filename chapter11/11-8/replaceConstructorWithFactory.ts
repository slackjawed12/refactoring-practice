class Employee {
  _name: string;
  _typeCode: "E" | "M" | "S";
  constructor(name: string, typeCode: "E" | "M" | "S") {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesperson" };
  }
}

function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

// 호출자
const document = {
  name: "강백호",
  emType: "M",
  leadEngineer: "윤대협",
} as const;

const candidate = new Employee(document.name, document.emType);
const leadEngineer = new Employee(document.leadEngineer, "E");

console.log(candidate, leadEngineer);
export default {};
