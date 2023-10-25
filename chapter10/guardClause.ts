class Employee {
  isSeperated: boolean;
  isRetired: boolean;
}

function payAmount(employee: Employee) {
  if (employee.isSeperated) {
    return { amount: 0, reasonCode: "SEP" };
  }
  if (employee.isRetired) {
    return { amount: 0, reasonCode: "RET" };
  }
  return someFinalComputation;
}

function someFinalComputation() {
  return { amount: 1, reasonCode: "ACC" };
}

export default {};
