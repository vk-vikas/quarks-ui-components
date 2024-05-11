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
}

export const Input = ({
  label,
  inputValue,
  onInputValueChange,
  isInvalid,
  errorMessage,
  isRequired,
  isDisabled,
  variant,
  roundness,
  inputSize,
  ...props
}: InputProps) => {
  return (
    <div className="inline-block">
      <div
        className={cn(
          inputVariants({ inputSize, variant, roundness, isDisabled })
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
      <div className="px-5 text-red-500">
        {/* {validate ? validate(value) : <p className="">empty</p>} */}
        {isInvalid ? (
          <p className="">{errorMessage}</p>
        ) : (
          <p className="text-transparent">empty</p>
        )}
      </div>
    </div>
  );
};

const inputVariants = cva("mx-2 mt-1 overflow-hidden", {
  variants: {
    variant: {
      light_blue: "bg-blue-200",
      just_blue: "bg-blue-500 text-white",
      black: "bg-gray-900 text-white",
      white: "bg-white text-black",
    },
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
    variant: "light_blue",
    inputSize: "md",
    roundness: "md",
  },
});
