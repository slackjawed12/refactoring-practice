// 파생 변수를 질의 함수로 바꾸기
class ProductionPlan {
  constructor(production, adjustments) {
    this._production = production;
    this._adjustments = adjustments;
  }

  get production() {
    return this._production;
  }

  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
