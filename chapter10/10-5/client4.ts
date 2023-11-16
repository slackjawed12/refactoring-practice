export const client4 = (aCustomer) => {
  const weeksDeliquent = aCustomer.paymentHistory.weeksDeliquentInLastYear;

  return weeksDeliquent;
};
