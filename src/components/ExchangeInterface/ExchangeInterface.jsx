import { useState } from "react";

// components
import { ConfirmButton } from "../ConfirmButton/ConfirmButton";
import { CurrencyInput } from "../CurrencyInput/CurrencyInput";
import { ExchangeRate } from "../ExchangeRate/ExchangeRate";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { SuccessMessage } from "../Index";

//hooks
import { useExchangeRate } from "../../hooks/useExchangeRate";

// utils
import { convertCurrency } from "../../utils/currency";

// styles
import "./ExchangeInterface.scss";

export const ExchangeInterface = () => {
  const { exchangeRateData } = useExchangeRate();

  const [exchangeType, setExchangeType] = useState("buy");
  const [swapState, setSwapState] = useState({
    fromCurrency: "USD",
    toCurrency: "BTC",
    fromAmount: "",
    toAmount: "",
    isProcessing: false,
    isSwapSuccess: false,
    error: null,
  });

  const {
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    isProcessing,
    isSwapSuccess,
  } = swapState;

  // Toggle between buy and sell modes
  const handleSwapToggle = (swapValue) => {
    setExchangeType(swapValue);
    console.log({ swapValue });
    setSwapState((prev) => {
      // Swap currencies
      const newFromCurrency = prev.toCurrency;
      const newToCurrency = prev.fromCurrency;

      // Convert the amount if there's a value
      const newFromAmount = prev.fromAmount ? prev.fromAmount : "";
      const newToAmount = newFromAmount
        ? convertCurrency(
            newFromAmount,
            newFromCurrency,
            newToCurrency,
            exchangeRateData.rate
          )
        : "";

      return {
        ...prev,
        fromCurrency: newFromCurrency,
        toCurrency: newToCurrency,
        fromAmount: newFromAmount,
        toAmount: newToAmount,
      };
    });
  };

  const handleAmountChange = (value) => {
    const convertedAmount =
      value && exchangeRateData?.rate
        ? convertCurrency(
            value,
            fromCurrency,
            toCurrency,
            exchangeRateData.rate
          )
        : "";

    setSwapState((prev) => ({
      ...prev,
      fromAmount: value,
      toAmount: convertedAmount,
    }));
  };

  // Simulate the swap process
  const handleConfirmSwap = () => {
    // Simple validation
    if (!fromAmount || parseFloat(fromAmount) <= 0) return;

    setSwapState((prev) => ({ ...prev, isProcessing: true }));

    // Simulate processing delay
    setTimeout(() => {
      setSwapState((prev) => ({
        ...prev,
        isProcessing: false,
        isSwapSuccess: true,
      }));
    }, 1500);
  };

  // Reset the form after successful swap
  const handleCloseSuccess = () => {
    setSwapState({
      fromCurrency: "USD",
      toCurrency: "BTC",
      fromAmount: "",
      toAmount: "",
      isProcessing: false,
      isSwapSuccess: false,
      error: null,
    });
  };

  const headerText = exchangeType === "buy" ? "Buy BTC" : "Sell BTC";

  const isConfirmDisabled =
    !fromAmount ||
    parseFloat(fromAmount) <= 0 ||
    !toAmount ||
    parseFloat(toAmount) <= 0;

  return (
    <div className="card flex flex-col gap-20 relative m-l-auto m-r-auto m-t-auto">
      <div className="card__header">
        <h2 className="card__heading">{headerText}</h2>
        <ToggleButton
          exchangeType={exchangeType}
          setExchangeType={(swapValue) => handleSwapToggle(swapValue)}
        />
      </div>
      <div className="card__body flex flex-col gap-10">
        <CurrencyInput
          label={exchangeType === "buy" ? "Enter Amount" : "Enter Quantity"}
          suffix={exchangeType === "buy" ? "USD" : "BTC"}
          amount={fromAmount}
          currency={fromCurrency}
          onChange={handleAmountChange}
          placeholder="0"
        />
        <CurrencyInput
          label={exchangeType === "buy" ? "Receive" : "Current Value"}
          suffix={exchangeType !== "buy" ? "USD" : "BTC"}
          amount={toAmount}
          currency={toCurrency}
          onChange={() => {}}
          disabled={true}
          placeholder="0"
        />
        <ExchangeRate exchangeRateData={exchangeRateData} />
      </div>
      <div className="card__footer">
        <ConfirmButton
          className={`${exchangeType === "buy" ? "success" : "danger"}`}
          onConfirm={handleConfirmSwap}
          disabled={isConfirmDisabled}
          isProcessing={isProcessing}
        />
      </div>

      {/* Success message overlay */}
      {isSwapSuccess && (
        <SuccessMessage
          fromAmount={fromAmount}
          toAmount={toAmount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          onClose={handleCloseSuccess}
        />
      )}
    </div>
  );
};
