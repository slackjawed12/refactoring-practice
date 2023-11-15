import { Site, Customer, isUnknown } from "./specialCase";

export const client1 = (site) => {
  const aCustomer = site.customer;
  // ...

  let customerName;
  if (isUnknown(aCustomer)) {
    customerName = "거주자";
  } else {
    customerName = aCustomer.name;
  }

  return customerName;
};
