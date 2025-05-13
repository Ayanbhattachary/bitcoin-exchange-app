import { validateCurrencyInput } from "../../utils/currency";
import "./CurrencyInput.scss";

export const CurrencyInput = ({
  label,
  amount,
  currency,
  onChange,
  disabled = false,
  suffix,
  ...props
}) => {

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (validateCurrencyInput(value, currency)) {
      onChange(value);
    }
  }

  return (
    <div className="currency-input">
      <label className="currency-input__label">{label}</label>

      <div className={`currency-input__wrapper`}>
        <input
          type="text"
          className="currency-input__input"
          disabled={disabled}
          value={amount}
          onChange={handleOnChange}
          {...props}
        />
        {
          suffix &&
          <span className="currency-input__suffix">{suffix}</span>
        }
       </div>
    </div>
  );
};
