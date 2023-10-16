function calculateFee(aDate, plan, quantity) {
  let charge: number;
  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }

  if (summer()) {
    charge = summerCharge();
  } else {
    charge = regularCharge();
  }

  return charge;
}
