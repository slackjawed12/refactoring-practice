class Organization {
  constructor(data) {
    this._title = data.name;
    this._country = data.country;
  }

  get name() {
    return this._title;
  }
  set name(aString) {
    this._title = aString;
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
