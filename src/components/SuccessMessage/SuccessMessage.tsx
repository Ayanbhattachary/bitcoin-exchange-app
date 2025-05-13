import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { formatCurrencyAmount } from "../../utils/currency";

import "./SuccessMessage.scss";

export const SuccessMessage = ({
  fromAmount,
  toAmount,
  fromCurrency,
  toCurrency,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-message">
      <div className="success-message__content">
        <CheckCircle size={64} className="success-message__icon" />
        <h3 className="success-message__title">Swap Successful!</h3>
        <p className="success-message__description">
          You have successfully swapped{" "}
          {formatCurrencyAmount(fromAmount, fromCurrency)} to{" "}
          {formatCurrencyAmount(toAmount, toCurrency)}.
        </p>

        <div className="success-message__summary">
          <div className="success-message__summary-row">
            <span className="success-message__label">
              {fromCurrency === "USD" ? "You spent:" : "You Sold:"}
            </span>
            <span className="success-message__value">
              {formatCurrencyAmount(fromAmount, fromCurrency)}
            </span>
          </div>
          <div className="success-message__summary-row">
            <span className="success-message__label">
              {fromCurrency === "USD" ? "You received:" : "Amount Received:"}
            </span>
            <span className="success-message__value">
              {formatCurrencyAmount(toAmount, toCurrency)}
            </span>
          </div>
        </div>

        <button onClick={onClose} className="success-message__button">
          Done
        </button>
      </div>
    </div>
  );
};
