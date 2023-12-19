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
  targetTemperature(selectedTemperature: number) {
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
// 리팩터링 결과:
// 단점 : 의존성을 모듈 밖으로 밀어내므로 호출자 쪽 코드는 다루기 어려워진다.
// 장점 : HeatingPlan 클래스는 전역객체인 온도조절기(thermostat)와의 결합이 끊어진다
// 장점2 : HeatingPlan 클래스는 불변이 되어 targetTemperature 메서드가 참조 투명해진다.
const thePlan = new HeatingPlan(50, 10);
const setToHeat = () => {};
const setToCool = () => {};
const setOff = () => {};
if (
  thePlan.targetTemperature(thermostat.selectedTemperature) >
  thermostat.currentTemperature
) {
  setToHeat();
} else if (
  thePlan.targetTemperature(thermostat.selectedTemperature) <
  thermostat.currentTemperature
) {
  setToCool();
} else {
  setOff();
}
