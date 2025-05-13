import React from "react";
import { ArrowDownUp, RefreshCw } from "lucide-react";

import { formatCurrencyAmount } from "../../utils/currency";

import "./ExchangeRate.scss";

export const ExchangeRate = ({ exchangeRateData }) => {
  const { rate } = exchangeRateData;

  return (
    <div className="exchange-rate">
      <div className="exchange-rate__header">
        <RefreshCw size={16} className="text-blue-600" />

        <div className="exchange-rate__label">
          <span className="exchange-rate__title">Exchange Rate</span>
        </div>
      </div>

      <div className="exchange-rate__body">
        <span className="exchange-rate__value">
          1 BTC = {formatCurrencyAmount(rate, "USD")}
        </span>
        <ArrowDownUp size={18} className="exchange-rate__divider-icon" />
        <span className="exchange-rate__value">
          1 USD = {formatCurrencyAmount(1 / rate, "BTC")}
        </span>
      </div>
    </div>
  );
};
