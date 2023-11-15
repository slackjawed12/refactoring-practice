export const client4 = (aCustomer) => {
  const weeksDeliquent =
    aCustomer === "미확인 고객"
      ? 0
      : aCustomer.paymentHistory.weeksDeliquentInLastYear;

  return weeksDeliquent;
};
