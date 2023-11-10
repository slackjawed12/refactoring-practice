/**
 * 투자 등급
 */
function rating(voyage, history) {
  return new Rating(voyage, history).value;
}

/**
 * 항해 경로 위험 요소
 */
function voyageRisk(voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if (["중국", "동인도"].includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

/**
 * 선장의 항해 이력 위험요소
 */
function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter((v) => v.profit < 0).length;
  if (voyage.zone === "중국" && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

/**
 * 중국 경유 여부
 */
function hasChina(history) {
  return history.some((v) => "중국" === v.zone);
}

/**
 * 수익 요인
 */
function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === "중국") result += 1;
  if (voyage.zone === "동인도") result += 1;
  if (voyage.zone === "중국" && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (history.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
  return result;
}

const voyageInfo = { zone: "서인도", length: 10 };
const historyList = [
  {
    zone: "동인도",
    profit: 5,
  },
  {
    zone: "서인도",
    profit: 15,
  },
  {
    zone: "중국",
    profit: -2,
  },
  {
    zone: "서아프리카",
    profvit: 7,
  },
];

type Voyage = {
  zone: string;
  length: number;
};
type History = { zone: string; profit: number }[];

class Rating {
  voyage: Voyage;
  history: History;
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = voyageProfitFactor(this.voyage, history);
    const vr = voyageRisk(this.voyage);
    const chr = captainHistoryRisk(this.voyage, history);
    if (vpf * 3 > vr + chr * 2) return "A";

    return "B";
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) {
      result += 2;
    }
    if (this.voyage.length > 8) {
      result += this.voyage.length - 8;
    }
    if (["중국", "동인도"].includes(this.voyage.zone)) {
      result += 4;
    }
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) {
      result += 4;
    }
    result += this.history.filter((v) => v.profit < 0).length;
    if (this.voyage.zone === "중국" && hasChina(this.history)) {
      result -= 2;
    }
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === "중국") result += 1;
    if (this.voyage.zone === "동인도") result += 1;
    if (this.voyage.zone === "중국" && hasChina(this.history)) {
      result += 3;
      if (this.history.length > 10) result += 1;
      if (this.history.length > 12) result += 1;
      if (this.voyage.length > 18) result -= 1;
    } else {
      if (this.history.length > 8) result += 1;
      if (this.voyage.length > 14) result -= 1;
    }
    return result;
  }

  get hasChinaHistory() {
    return this.history.some((v) => "중국" === v.zone);
  }
}

class ExperiencedChinaRating extends Rating {}

const myRating = rating(voyageInfo, historyList);
console.log(myRating);

export default {};
