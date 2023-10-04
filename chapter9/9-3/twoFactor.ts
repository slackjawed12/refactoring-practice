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

  // 앞선 예시와 같이 assert를 하면, production 초기값이 0이 아닐 때 assertion이 실패한다.
  get production() {
    console.assert(this._production === this.calculatedProduction);
    return this._production;
  }

  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustment.push(anAdjustment);
    this._production += anAdjustment.amount;
  }

  get calculatedProduction() {
    return this._adjustment.reduce((sum, a) => sum + a.amount, 0);
  }
}
