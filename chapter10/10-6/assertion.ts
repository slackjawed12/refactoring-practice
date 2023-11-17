class Customer {
  discountRate;

  applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber;
    }

    assert(this.discountRate >= 0);
    return aNumber - this.discountRate * aNumber;
  }
}
