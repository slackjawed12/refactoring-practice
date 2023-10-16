function calculateFee(aDate, plan, quantity) {
  let charge: number;
  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }
  if (summer()) {
    charge = summerCharge();
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }

  return charge;
}
