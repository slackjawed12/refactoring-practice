// 파생 변수를 질의 함수로 바꾸기
class ProductionPlan {
  constructor(production, adjustments) {
    this._production = production;
    assert(this._production === this.calculatedProduction);
    this._adjustments = adjustments;
  }

  get production() {
    return this.calculatedProduction;
  }

  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
