import { VariantProps, cva } from "class-variance-authority";
import { HtmlHTMLAttributes, ReactNode } from "react";
import cn from "../cn";

interface ButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button = ({
  children,
  variant,
  size,
  roundness,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({
          variant,
          size,
          roundness,
          className,
        })
      )}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva("", {
  variants: {
    variant: {
      solid: "bg-blue-500 hover:bg-blue-600 text-white",
      outline:
        "bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white border border-blue-500 hover:border-transparent",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-xl px-4 py-2",
    },
    roundness: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      pill: "rounded-full ",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    roundness: "pill",
  },
});
