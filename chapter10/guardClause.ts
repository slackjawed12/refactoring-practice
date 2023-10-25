class Employee {
  isSeperated: boolean;
  isRetired: boolean;
}

function payAmount(employee: Employee) {
  let result: { amount: number; reasonCode: string };
  if (employee.isSeperated) {
    return { amount: 0, reasonCode: "SEP" };
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: "RET" };
    } else {
      // 급여를 계산한다.
      result = someFinalComputation();
    }
  }
  return result;
}

function someFinalComputation() {
  return { amount: 1, reasonCode: "ACC" };
}

export default {};
