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

  get plumage() {
    return this._plumage || "보통이다";
  }

  get airSpeedVelocity() {
    return 0;
  }

  selectSpeciesDelegate(data: BirdData) {
    switch (data.type) {
      case "유럽 제비":
        return new EuropeanSwallowDelegate();
      default:
        return null;
    }
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  _numberOfCoconuts: number;
  constructor(data: BirdData) {
    super(data);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  _voltage: number;
  _isNailed: boolean;
  constructor(data: BirdData) {
    super(data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage() {
    if (this._voltage > 100) {
      return "그을렸다";
    } else {
      return this._plumage || "예쁘다";
    }
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}

class EuropeanSwallowDelegate {}

function createBird(data: BirdData) {
  switch (data.type) {
    case "유럽 제비":
      return new EuropeanSwallow(data);
    case "아프리카 제비":
      return new AfricanSwallow(data);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(data);
    default:
      return new Bird(data);
  }
}