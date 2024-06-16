import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import cn from "../cn";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label: string;
  inputValue?: string;
  onInputValueChange?: (x: string) => void;
  isInvalid?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
  bgColor?: string;
  textColor?: string;
}

export const Input = ({
  label,
  inputValue,
  onInputValueChange,
  isInvalid,
  errorMessage,
  isRequired,
  isDisabled,
  roundness,
  inputSize,
  bgColor,
  textColor,
  ...props
}: InputProps) => {
  let dynamicClass = `bg-${bgColor} text-${textColor}`;
  return (
    <div className="inline-block">
      <div
        data-testid="input-wrapper"
        className={cn(
          inputVariants({ inputSize, roundness, isDisabled }),
          dynamicClass
        )}
      >
        <div className="p-2">
          <label className={`px-2 ${isRequired ? "after:content-['_*']" : ""}`}>
            {label}
          </label>
          <input
            {...props}
            value={inputValue}
            onChange={(e) => {
              onInputValueChange && onInputValueChange(e.target.value);
            }}
            className="px-2 border-none outline-none bg-inherit"
          />
        </div>
      </div>
      <div className="px-5 text-red-500" data-testid="error-wrapper">
        {isInvalid ? (
          <p className="">{errorMessage}</p>
        ) : (
          <p className="text-transparent">empty</p>
        )}
      </div>
    </div>
  );
};

const inputVariants = cva("mx-2 my-1 overflow-hidden", {
  variants: {
    inputSize: {
      sm: "text-sm w-[280px] ",
      md: "text-md w-[320px]",
      lg: "text-lg w-[360px]",
    },
    roundness: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      pill: "rounded-full",
    },
    isDisabled: {
      true: "opacity-60 pointer-events-none",
    },
  },
  defaultVariants: {
    inputSize: "md",
    roundness: "md",
  },
});
