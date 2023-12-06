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
  xxxNEWwithinRange(aNumberRange: { low: number; high: number }) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
  }
}

// 호출자
const aRoom = {
  daysTempRange: {
    low: 10,
    high: 30,
  },
};
const aPlan = new HeatingPlan({ low: 20, high: 30 });
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high)) {
  alert.push("방 온도가 지정 범위를 벗어났습니다.");
}

export default {};
