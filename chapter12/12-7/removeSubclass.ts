class Person {
  _name: string;
  _genderCode: string;
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return this._genderCode;
  }

  get isMale() {
    return "M" === this._genderCode;
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
      return new Male(aRecord.name, "M");
    case "F":
      return new Female(aRecord.name, "F");
    default:
      return new Person(aRecord.name, "X");
  }
}

// 클라이언트
const people: Person[] = [];
const numOfMales = people.filter((p) => p.isMale).length;

export default {};
