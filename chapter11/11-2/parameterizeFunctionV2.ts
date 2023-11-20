/**
 * 대역에 따른 요금을 계산한다.
 */
function baseCharge(usage: number) {
  if (usage < 0) {
    return usd(0);
  }
  const amount =
    bottomBand(usage) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    topBand(usage) * 0.07;
  return usd(amount);
}

function usd(num: number) {
  return num / 1000;
}

function bottomBand(usage: number) {
  return Math.min(usage, 100);
}

function middleBand(usage: number) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage: number) {
  return usage > 200 ? usage - 200 : 0;
}

function withinBand(usage: number, bottom: number, top: number) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}
