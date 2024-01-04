// 점수 계산 함수
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  _candidate: {
    originState: string;
  };

  _medicalExam: {
    isSmoker: boolean;
  };

  _scoringGuide: {
    stateWithLowCertification: (originState: string) => {};
  };
  _result: number;
  _healthLevel: number;
  _highMedicalRiskFlag: boolean;
  _certificationGrade: string;

  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }

    this._certificationGrade = "regular";
    if (
      this._scoringGuide.stateWithLowCertification(this._candidate.originState)
    ) {
      this._certificationGrade = "low";
      this._result -= 5;
    }
    // ....

    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }
}
