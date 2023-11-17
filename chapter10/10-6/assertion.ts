import assert from "assert";
class Customer {
  _discountRate;

  applyDiscount(aNumber) {
    if (!this._discountRate) {
      return aNumber;
    }

    assert(this._discountRate >= 0);
    return aNumber - this._discountRate * aNumber;
  }

  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }
}
