// 파생 변수를 질의 함수로 바꾸기 2 - 둘 이상의 요소가 관여될 때
class Adjustment {
  amount: number;
}

class ProductionPlan {
  _adjustment: Adjustment[];
  _initialProduction: number;
  _productionAccumulator: number;

  constructor(production: number) {
    this._initialProduction = production;
    this._productionAccumulator = 0;
    this._adjustment = [];
  }

  // 앞선 예시와 같이 assert를 하면, production 초기값이 0이 아닐 때 assertion이 실패한다.
  // production 변수를 initialProduction과 productionAccumulator 두 개로 쪼갠다.
  get production() {
    console.assert(
      this._productionAccumulator === this.calculatedProductionAccumulator
    );
    return this._initialProduction + this._productionAccumulator;
  }

  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustment.push(anAdjustment);
  }

  get calculatedProductionAccumulator() {
    return this._adjustment.reduce((sum, a) => sum + a.amount, 0);
  }
}
