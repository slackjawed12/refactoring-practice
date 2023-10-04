// 파생 변수를 질의 함수로 바꾸기
class ProductionPlan {
  constructor(production, adjustment) {
    this._production = production;
    this._adjustment = adjustment;
  }

  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustment.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
