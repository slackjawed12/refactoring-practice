class Order {
  quantity: number;
  itemPrice: number;
  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    let discountLevel;
    if (this.quantity > 100) {
      discountLevel = 2;
    } else {
      discountLevel = 1;
    }
    return this.discountPrice(basePrice, discountLevel);
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountPrice(basePrice: number, discountLevel: number) {
    switch (discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}

export default {};
