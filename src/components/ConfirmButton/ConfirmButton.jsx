import { Check, Loader2 } from "lucide-react";
import "./ConfirmButton.scss";

export const ConfirmButton = ({
  onConfirm,
  isProcessing,
  disabled,
  className,
}) => {
  return (
    <button
      onClick={onConfirm}
      disabled={disabled || isProcessing}
      className={`confirm-button ${
        disabled || isProcessing ? "confirm-button--disabled" : "confirm-button--" + className
      }`}
    >
      {isProcessing ? (
        <>
          <Loader2
            size={20}
            className="confirm-button__icon confirm-button__icon--spin"
          />
          Processing...
        </>
      ) : (
        <>
          <Check size={20} className="confirm-button__icon" />
          Confirm Swap
        </>
      )}
    </button>
  );
};
