export class Person {
  _telephoneNumber: TelephoneNumber;
  constructor(officeAreaCode: string, officeNumber: string) {
    this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

export class TelephoneNumber {
  _areaCode: string;
  _number: string;

  constructor(areaCode: string, number: string) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    this._number = arg;
  }

  equals(other) {
    if (!(other instanceof TelephoneNumber)) {
      return false;
    }

    return this.areaCode === other.areaCode && this.number === other.number;
  }
}
