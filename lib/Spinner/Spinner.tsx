import { cva, VariantProps } from "class-variance-authority";
import cn from "../cn";

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  spinnerColor: string;
  label?: string;
  textColor?: string;
}

const Spinner = ({
  size,
  variant,
  label,
  spinnerColor,
  textColor,
}: SpinnerProps) => {
  const varColor = `border-t-${spinnerColor}`;
  const varTextColor = `text-${textColor}`;
  return (
    <div className="m-2 inline-block text-center">
      <div
        className={cn(
          spinnerVariants({ size, variant }),
          varColor,
          varTextColor
        )}
      />
      <p className={varTextColor}>{label}</p>
    </div>
  );
};

const spinnerVariants = cva(
  "mx-auto text-center animate-spin rounded-full border-4 ",
  {
    variants: {
      variant: {
        light: "border-gray-300",
        dark: "border-gray-900",
      },
      size: {
        xs: "h-10 w-10",
        sm: "h-12 w-12",
        md: "h-14 w-14",
        lg: "h-16 w-16",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);
export default Spinner;
