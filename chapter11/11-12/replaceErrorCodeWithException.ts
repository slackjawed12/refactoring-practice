class ShippingRules {
  constructor(data) {}
}

const countryData = {
  shippingRules: {
    USA: {},
    KOR: {},
  },
};

function localShippingRules(country: string) {
  const data = countryData.shippingRules[country];
  if (data) {
    return new ShippingRules(data);
  }

  return -23;
}

export default {};
