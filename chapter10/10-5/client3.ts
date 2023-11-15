export const client3 = (aCustomer, newPlan) => {
  if (aCustomer !== "미확인 고객") {
    aCustomer.billingPlan = newPlan;
  }

  return;
};
