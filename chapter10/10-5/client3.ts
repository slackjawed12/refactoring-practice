export const client3 = (aCustomer, newPlan) => {
  if (aCustomer.isUnknown) {
    aCustomer.billingPlan = newPlan;
  }

  return;
};
