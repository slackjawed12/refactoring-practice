import { isUnknown } from "./specialCase";

// 디폴트 값으로 "거주자"가 아닌 "미확인 거주자"를 사용하는 클라이언트
export const strangeClient = (aCustomer) => {
  const name = !isUnknown(aCustomer) ? aCustomer.name : "미확인 거주자";
  return name;
};
