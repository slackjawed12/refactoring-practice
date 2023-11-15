import { isUnknown } from "./specialCase";

export const client3 = (aCustomer, newPlan) => {
  if (isUnknown(aCustomer)) {
    aCustomer.billingPlan = newPlan;
  }

  return;
};
