class Person {
  _name: string;
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return "X";
  }
}

class Male extends Person {
  get genderCode() {
    return "M";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

// 서브클래스 사용자
function loadFromInput(data) {
  return data.map((aRecord) => createPerson(aRecord));
}

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case "M":
      return new Male(aRecord.name);
    case "F":
      return new Female(aRecord.name);
    default:
      return new Person(aRecord.name);
  }
}

// 클라이언트
const people: Person[] = [];
const numOfMales = people.filter((p) => p instanceof Male).length;
export default {};
