class Organization {
  constructor(data) {
    this._name = data.namee;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }
  get country() {
    return this.country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

// 기존에 사용되는 bare 레코드 - Organization으로 캡슐화
// const organizaiton = {
//   name: "애크미 구스베리",
//   country: "GB",
// };

const organizaiton = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

console.log(organizaiton);
