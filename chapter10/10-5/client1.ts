import { Site, Customer } from "./specialCase";

export const client1 = (site) => {
  const aCustomer = site.customer;
  // ...

  let customerName;
  if (aCustomer === "미확인 고객") {
    customerName = "거주자";
  } else {
    customerName = aCustomer.name;
  }

  return customerName;
};
