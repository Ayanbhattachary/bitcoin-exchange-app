import "./ToggleButton.scss";

export const ToggleButton = ({ exchangeType, setExchangeType }) => {
 
  return (
    <div className="toggle-wrapper">
      <div className={`toggle-button toggle-button--${exchangeType}`}>
        <div className="toggle-button__container">
          <button
            disabled={exchangeType === "buy" ? true : false}
            className={`toggle-button__option ${
              exchangeType === "buy" ? "toggle-button__option--active" : ""
            }`}
            onClick={() => setExchangeType("buy")}
          >
            Buy
          </button>
          <button
            disabled={exchangeType === "sell" ? true : false}
            className={`toggle-button__option ${
              exchangeType === "sell" ? "toggle-button__option--active" : ""
            }`}
            onClick={() => setExchangeType("sell")}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};
