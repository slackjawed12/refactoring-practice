// 점수 계산 함수
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer().execute(candidate, medicalExam, scoringGuide);
}

class Scorer {
  _candidate: {
    originState: string;
  };

  constructor(candidate) {
    this._candidate = candidate;
  }

  execute(medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }

    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(this._candidate.originState)) {
      certificationGrade = "low";
      result -= 5;
    }
    // ....

    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}
