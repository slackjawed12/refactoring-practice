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

const organizaiton = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

console.log(organizaiton);
