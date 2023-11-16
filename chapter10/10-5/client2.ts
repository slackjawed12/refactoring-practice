export const client2 = (aCustomer, registry) => {
  const plan = aCustomer.isUnknown
    ? registry.billingPlans.basic
    : aCustomer.billingPlan;

  return plan;
};
