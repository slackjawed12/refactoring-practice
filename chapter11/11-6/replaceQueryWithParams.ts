const thermostat = {
  selectedTemperature: 100,
  currentTemperature: 55,
};

class HeatingPlan {
  _max: number;
  _min: number;
  constructor(max: number, min: number) {
    this._max = max;
    this._min = min;
  }
  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    if (selectedTemperature > this._max) {
      return this._max;
    } else if (selectedTemperature < this._min) {
      return this._min;
    } else {
      return selectedTemperature;
    }
  }
}

// 호출자
const thePlan = new HeatingPlan(50, 10);
const setToHeat = () => {};
const setToCool = () => {};
const setOff = () => {};
if (thePlan.targetTemperature > thermostat.currentTemperature) {
  setToHeat();
} else if (thePlan.targetTemperature < thermostat.currentTemperature) {
  setToCool();
} else {
  setOff();
}
