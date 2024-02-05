// 서브클래스가 여러 개일 때
type BirdData = {
  type: string;
  name: string;
  plumage: string;
  numberOfCoconuts: number;
  voltage: number;
  isNailed: boolean;
};

class Bird {
  _name: string;
  _plumage: string;
  _speciesDelegate;
  constructor(data: BirdData) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  get name() {
    return this._name;
  }

  // plumage 속성 없는 위임에서는 오류 발생함
  // get plumage() {
  //   if(this._speciesDelegate) {
  //     return this._speciesDelegate.plumage;
  //   } else {
  //     return this._plumage || "보통이다"
  //   }
  // }

  get plumage() {
    return this._speciesDelegate.plumage;
  }

  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }

  selectSpeciesDelegate(data: BirdData) {
    switch (data.type) {
      case "유럽 제비":
        return new EuropeanSwallowDelegate(data, this);
      case "아프리카 제비":
        return new AfricanSwallowDelegate(data, this);
      case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return new SpeciesDelegate(data, this);
    }
  }
}

class SpeciesDelegate {
  _bird: Bird;
  constructor(data, bird) {
    this._bird = bird;
  }

  get plumage() {
    return this._bird._plumage || "보통이다";
  }

  get airSpeedVelocity() {
    return 0;
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallowDelegate extends SpeciesDelegate {
  _numberOfCoconuts: number;
  constructor(data: BirdData, bird: Bird) {
    super(data, bird);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  _voltage: number;
  _isNailed: boolean;
  _bird: Bird;
  constructor(data: BirdData, bird: Bird) {
    super(data, bird);
    this._bird = bird;
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage() {
    if (this._voltage > 100) {
      return "그을렸다";
    } else {
      return this._bird._plumage || "예쁘다";
    }
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}

function createBird(data: BirdData) {
  return new Bird(data);
}
