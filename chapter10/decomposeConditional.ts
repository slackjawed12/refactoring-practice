function calculateFee(aDate, plan, quantity) {
  let charge: number;
  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  if (summer()) {
    charge = quantity * plan.summerRate;
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }

  return charge;
}
