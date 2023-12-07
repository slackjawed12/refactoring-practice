class Order {
  quantity: number;
  itemPrice: number;
  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    return this.discountPrice(basePrice, this.discountLevel);
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountPrice(basePrice: number, discountLevel: number) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}

export default {};
