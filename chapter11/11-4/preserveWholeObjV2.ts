// 리팩터링을 연달아 수행해서 새 메서드 만드는 절차
class HeatingPlan {
  _temperatureRange: {
    low: number;
    high: number;
  };
  constructor(temperatureRange: { low: number; high: number }) {
    this._temperatureRange = temperatureRange;
  }
  withinRange(bottom: number, top: number) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
  xxNEWwithinRange(aPlan, tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = aPlan.withinRange(low, high);
    return isWithinRange;
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
const isWithinRange = aPlan.xxNEWwithinRange(aPlan, tempRange);
if (!isWithinRange) {
  alert.push("방 온도가 지정 범위를 벗어났습니다.");
}

export default {};
