class Party {
  _name;
  constructor(name) {
    this._name = name;
  }
}

class Employee extends Party {
  _id;
  _monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  _staff;
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }
}

export default {};
// 생성자 시작 부분으로 옮길 수 없는 공통코드는 함수 추출하기 + 메서드 올리기 적용해서 본문을 끌어올린다.
