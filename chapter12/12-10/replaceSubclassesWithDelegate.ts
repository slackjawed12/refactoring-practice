export class Booking {
  _show: Show;
  _date: Date;
  _premiumDelegate: PremiumBookingDelegate;
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

  _bePremium(extras: Extra) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

export class PremiumBooking extends Booking {
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

export class Show {
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

export class Extra {
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

export class PremiumBookingDelegate {
  _host: Booking;
  _extras: Extra;
  constructor(hostBooking: Booking, extras: Extra) {
    this._host = hostBooking;
    this._extras = extras;
  }
}

export function createBooking(show: Show, date: Date) {
  return new Booking(show, date);
}

export function createPremiumBooking(show: Show, date: Date, extras: Extra) {
  const result = new PremiumBooking(show, date, extras);
  result._bePremium(extras);
  return result;
}

// 클라이언트 ...
const show = new Show(100000, false);
const date = new Date();
const aBooking = createBooking(show, date);
// ...
const show2 = new Show(100000, true);
const date2 = new Date();
const extras = new Extra(50000, false);
const premiumBooking = createPremiumBooking(show2, date2, extras);

export default {};
