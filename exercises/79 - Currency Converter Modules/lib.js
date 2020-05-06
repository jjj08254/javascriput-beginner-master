const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}

export async function convert(amount, fromBase, toBase) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[fromBase]) {
    console.log(`We don't have ${fromBase} to convert to ${toBase}!`);
    const rates = await fetchRates(fromBase);
    // store them for next time
    ratesByBase[fromBase] = rates;
  }
  // convert the amount that they passed it
  const rate = ratesByBase[fromBase].rates[toBase];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
