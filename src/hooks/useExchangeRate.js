import { useState, useEffect } from "react";

export const useExchangeRate = (fetchInterval = 60000) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [exchangeRateData, setExchangeRateData] = useState({
    rate: 10145.42, // Default BTC rate
  });

  const fetchExchangeRate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rate");
      }

      const data = await response.json();
      const rate = parseFloat(data?.bitcoin?.usd);

      setExchangeRateData({
        rate,
      });
    } catch (err) {
      console.error("Error fetching exchange rate data", err);
      setError("Failed to fetch latest rate");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate();

    // Set up interval for periodic updates
    const intervalId = setInterval(fetchExchangeRate, fetchInterval);

    return () => clearInterval(intervalId);
  }, [fetchInterval]);

  return { isLoading, error, exchangeRateData };
};
