class Booking {
  _show: Show;
  _date: Date;
  constructor(show: Show, date: Date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    return this._show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }
    return result;
  }

  get isPeakDay() {
    return false;
  }
}

class PremiumBooking extends Booking {
  _extras: Extra;
  constructor(show: Show, date: Date, extras: Extra) {
    super(show, date);
    this._extras = extras;
  }

  get hasTalkback() {
    return this._show.hasOwnProperty("talkback");
  }

  get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee);
  }

  // 슈퍼클래스에는 없는 기능
  get hasDinner() {
    return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
  }
}

class Show {
  _price: number;
  talkback?: boolean;
  constructor(price: number, talkback: boolean) {
    this._price = price;
    if (talkback) {
      this.talkback = true;
    }
  }

  get price() {
    return this._price;
  }
}

class Extra {
  _premiumFee: number;
  dinner?: boolean;
  constructor(premiumFee: number, isDinner: boolean) {
    this._premiumFee = premiumFee;
    if (isDinner) {
      this.dinner = true;
    }
  }

  get premiumFee() {
    return this._premiumFee;
  }
}

// 클라이언트 ...
const show = new Show(100000, false);
const aBooking = new Booking(show, new Date());
// ...
const show2 = new Show(100000, true);
const extras = new Extra(50000, false);
const premiumBooking = new PremiumBooking(show2, new Date(), extras);
