import { Site, Customer, isUnknown } from "./specialCase";

export const client1 = (site) => {
  const aCustomer = site.customer;
  // ...

  return aCustomer.name;
};
