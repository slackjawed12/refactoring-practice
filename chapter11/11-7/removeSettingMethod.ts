// 리팩터링 필요한 상황
// 1. 무조건 getter를 통해서만 필드를 다뤄야 할 때
// 2. 생성자 호출 후 일련의 setter를 호출해서 객체를 완성하는 스크립트 코드가 있을 때
// setter 제거해서 의도를 명확히 밝히는 것이 더 바람직하다.

class Person {
  _name: string;
  _id: string;
  constructor(id: string) {
    this.id = id;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get id() {
    return this._id;
  }
  set id(arg) {
    this._id = arg;
  }
}

const martin = new Person("1234");
martin.name = "마틴";
