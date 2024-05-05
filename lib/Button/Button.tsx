import { VariantProps, cva } from "class-variance-authority";
import { HtmlHTMLAttributes, ReactNode, forwardRef } from "react";
import cn from "../cn";
import { btnTheme } from "./Button.constant";

interface ButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      roundness,
      movement,
      isDisabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
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
  "box-border transition ease-in-out delay-50 flex gap-2 justify-center align-center",
  {
    variants: {
      variant: {
        solid_light_red: btnTheme.solid.light_red,
        solid_just_red: btnTheme.solid.just_red,
        solid_dark_red: btnTheme.solid.dark_red,
        solid_ligh_blue: btnTheme.solid.light_blue,
        solid_just_blue: btnTheme.solid.just_blue,
        solid_dark_blue: btnTheme.solid.dark_blue,
        outline_light_red: btnTheme.outline.light_red,
        outline_just_red: btnTheme.outline.just_red,
        outline_dark_red: btnTheme.outline.dark_red,
      },
      size: {
        sm: "text-sm px-2.5 py-1.5",
        md: "text-base px-3.5 py-1.5",
        lg: "text-xl px-5 py-2",
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
      variant: "solid_just_blue",
      size: "md",
      roundness: "sm",
    },
  }
);
