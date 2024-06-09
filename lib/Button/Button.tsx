import { VariantProps, cva } from "class-variance-authority";
import { HtmlHTMLAttributes, ReactNode, forwardRef } from "react";
import cn from "../cn";

interface ButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  bgColor: string;
  textColor?: string;
  variant: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      bgColor,
      textColor,
      children,
      size,
      roundness,
      movement,
      isDisabled,
      className,
      ...props
    },
    ref
  ) => {
    let color = bgColor?.split("-")[0];
    let luminence = bgColor?.split("-")[1];
    let dynamicClass = "";
    if (variant === "solid") {
      dynamicClass = `bg-${bgColor} hover:bg-${color}-${Number(luminence) + 100} text-${textColor}`;
    } else if (variant === "outline") {
      //bg-transparent hover:bg-red-500 text-red-500 hover:text-white border border-red-500 hover:border-transparent
      dynamicClass = `bg-transparent text-${color}-${luminence} hover:bg-${color}-${luminence} 
      hover:text-white border border-${color}-${luminence} hover:border-transparent`;
    }
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          dynamicClass,
          buttonVariants({
            size,
            roundness,
            movement,
            isDisabled,
            className,
          })
        )}
      >
        {children}
      </button>
    );
  }
);

const buttonVariants = cva(
  "box-border transition ease-in-out delay-50 inline ",
  {
    variants: {
      size: {
        sm: "text-sm px-2.5 py-1.5 max-h-8",
        md: "text-base px-3.5 py-1.5 max-h-9",
        lg: "text-xl px-5 py-2 max-h-11",
      },
      roundness: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        pill: "rounded-full ",
      },
      movement: {
        active: "hover:-translate-y-px",
        lazy: "",
      },
      isDisabled: {
        true: "opacity-60 pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      roundness: "sm",
    },
  }
);
