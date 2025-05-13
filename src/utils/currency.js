// Format amount based on currency type
export const formatCurrencyAmount = (amount, currency) => {
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numAmount)) return "";

  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numAmount);
  }

  if (currency === "BTC") {
    return (
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      }).format(numAmount) + " BTC"
    );
  }

  return numAmount.toString();
};

const currencyValidInputRegex = {
  BTC: /^\d*\.?\d{0,8}$/,
  USD: /^\d*\.?\d{0,2}$/,
};

export const validateCurrencyInput = (input, currency) => {
  if (input === "" || input === ".") return true;

  const regex = currencyValidInputRegex[currency];
  return regex.test(input);
};

export const convertCurrency = (amount, fromCurrency, toCurrency, rate) => {
  const numAmount = parseFloat(amount);

  if (isNaN(numAmount) || numAmount <= 0) return "";

  // BTC to USD
  if (fromCurrency === "BTC" && toCurrency === "USD") {
    return (numAmount * rate).toFixed(2);
  }

  // USD to BTC
  if (fromCurrency === "USD" && toCurrency === "BTC") {
    return (numAmount / rate).toFixed(8);
  }

  return amount;
};
