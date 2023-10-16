function calculateFee(aDate, plan, quantity) {
  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }

  const charge = summer() ? summerCharge() : regularCharge();

  return charge;
}
