class Organization {
  constructor(data) {
    this._title = data.title;
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
  title: "애크미 구스베리",
  country: "GB",
});

console.log(organizaiton);
