export class OrderPRocessingError extends Error {
  code;
  constructor(errorCode) {
    super(`주문 처리 오류: ${errorCode}`);
    this.code = errorCode;
  }
  get name() {
    return "OrderProcessingError";
  }
}

export default OrderPRocessingError;
