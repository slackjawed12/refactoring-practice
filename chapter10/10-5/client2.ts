import { Customer, isUnknown } from "./specialCase";

export const client2 = (aCustomer, registry) => {
  const plan = isUnknown(aCustomer)
    ? registry.billingPlans.basic
    : aCustomer.billingPlan;

  return plan;
};
