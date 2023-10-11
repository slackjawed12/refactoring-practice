import { Customer } from "./valueToRef";

let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(id: number) {
  if (!_repositoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new Customer(id));
  }
  return findCustomer(id);
}

export function findCustomer(id: number) {
  return _repositoryData.customers.get(id);
}
