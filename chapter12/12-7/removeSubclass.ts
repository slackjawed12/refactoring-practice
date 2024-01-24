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
  const result: any[] = [];
  data.forEach((aRecord) => {
    result.push(createPerson(aRecord));
  });

  return result;
}

function createPerson(aRecord) {
  let p;
  switch (aRecord.gender) {
    case "M":
      p = new Male(aRecord.name);
      break;
    case "F":
      p = new Female(aRecord.name);
      break;
    default:
      p = new Person(aRecord.name);
  }
  return p;
}

export default {};
