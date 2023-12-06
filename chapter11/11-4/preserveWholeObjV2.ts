// 리팩터링을 연달아 수행해서 새 메서드 만드는 절차
class HeatingPlan {
  _temperatureRange: {
    low: number;
    high: number;
  };
  constructor(temperatureRange: { low: number; high: number }) {
    this._temperatureRange = temperatureRange;
  }
  withinRange(tempRange) {
    return (
      tempRange.low >= this._temperatureRange.low &&
      tempRange.high <= this._temperatureRange.high
    );
  }
}

// 호출자
const aRoom = {
  daysTempRange: {
    low: 10,
    high: 30,
  },
};
const tempRange = aRoom.daysTempRange;
const aPlan = new HeatingPlan({ low: 20, high: 30 });
const isWithinRange = aPlan.withinRange(tempRange);
if (!isWithinRange) {
  alert.push("방 온도가 지정 범위를 벗어났습니다.");
}

export default {};
