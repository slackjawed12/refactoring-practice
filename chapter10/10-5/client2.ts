import { Customer } from "./specialCase";

export const client2 = (aCustomer, registry) => {
  const plan =
    aCustomer === "미확인 고객"
      ? registry.billingPlans.basic
      : aCustomer.billingPlan;

  return plan;
};
