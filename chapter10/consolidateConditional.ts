class Employee {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
}

function disabilityAmount(anEmployee: Employee) {
  if (isNotEligibleForDisability()) return 0;
  function isNotEligibleForDisability() {
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthsDisabled > 12 ||
      anEmployee.isPartTime
    );
  }
  // 장애 수당 계산
}
