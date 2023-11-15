import { isUnknown } from "./specialCase";

export const client4 = (aCustomer) => {
  const weeksDeliquent = isUnknown(aCustomer)
    ? 0
    : aCustomer.paymentHistory.weeksDeliquentInLastYear;

  return weeksDeliquent;
};
