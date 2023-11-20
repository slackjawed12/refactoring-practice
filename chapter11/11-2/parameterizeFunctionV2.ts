/**
 * 대역에 따른 요금을 계산한다.
 */
function baseCharge(usage: number) {
  if (usage < 0) {
    return usd(0);
  }
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function usd(num: number) {
  return num / 1000;
}

function withinBand(usage: number, bottom: number, top: number) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}
