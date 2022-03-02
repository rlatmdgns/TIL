class Scorer {
  _candidate;
  _medicalExam;
  _scoringGuide;
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }
  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    this.scoreSmoking();
    this._certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(this._candidate.originState)) {
      this._certificationGrade = "low";
      this._result -= 5;
    }
    this._result -= Math.max(this._healthLevel - 5, 0);
    return {
      result: this._result,
      certificationGrade: this._certificationGrade,
      highMedicalRiskFlag: this._highMedicalRiskFlag,
    };
  }
  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }
  }
}

const score = (candidate, medicalExam, scoringGuide) =>
  new Scorer(candidate, medicalExam, scoringGuide).execute();

const scoringGuide = {
  stateWithLowCertification: (state) => state === "CA" || state === "ME",
};

console.log(score({ originState: "CA" }, { isSmoker: true }, scoringGuide));
console.log(score({ originState: "NY" }, { isSmoker: false }, scoringGuide));
