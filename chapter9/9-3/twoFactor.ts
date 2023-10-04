// 파생 변수를 질의 함수로 바꾸기 2 - 둘 이상의 요소가 관여될 때
class Adjustment {
  amount: number;
}

class ProductionPlan {
  _production: number;
  _adjustment: Adjustment[];

  constructor(production: number) {
    this._production = production;
    this._adjustment = [];
  }

  get production() {
    return this._production;
  }

  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustment.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
