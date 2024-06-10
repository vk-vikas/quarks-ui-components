import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import cn from "../cn";
import { Button } from "../Button/Button";

interface ModalProps extends VariantProps<typeof modalVaraints> {
  children: ReactNode;
  headerText: string;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
  bgColor?: string;
  textColor?: string;
  secondaryButtonText?: string;
  secondaryButtonHanlder?: () => any;
  closeBtnBgColor?: string;
  closeBtnTextColor?: string;
  secondaryBtnBgColor?: string;
  secondaryBtnTextColor?: string;
}

export const Modal = ({
  children,
  headerText,
  isOpen,
  setIsOpen,
  size,
  theme,
  roundness,
  bgColor,
  textColor,
  secondaryButtonText,
  secondaryButtonHanlder,
  closeBtnBgColor,
  closeBtnTextColor,
  secondaryBtnBgColor,
  secondaryBtnTextColor,
}: ModalProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  let dynamicBgClass = bgColor ? `bg-${bgColor}` : "bg-white";
  let dynamicTextClass = textColor ? `text-${textColor}` : "text-black";

  const handlerForSecondaryButton = () => {
    secondaryButtonHanlder && secondaryButtonHanlder();
    handleClose();
  };

  return (
    <div
      className={`${isOpen ? "" : "hidden"} fixed z-10 h-screen w-screen bg-gray-900/50 top-0 right-0 `}
    >
      <div
        className={cn(
          dynamicBgClass,
          dynamicTextClass,
          modalVaraints({ size, roundness, theme })
        )}
      >
        {/* modal header */}
        <div className="px-4 py-4 font-semibold ">{headerText}</div>

        {/* modal body  */}
        <div className="py-6 px-4 flex flex-wrap overflow-x-auto grow">
          {children}
        </div>

        {/* modal footer */}
        <div className="px-4 py-4 flex justify-end gap-2">
          <Button
            bgColor={closeBtnBgColor ? closeBtnBgColor : "red-500"}
            variant="outline"
            textColor={closeBtnTextColor ? closeBtnTextColor : "white"}
            onClick={handleClose}
            className={cn(btnVariants({ roundness }))}
          >
            Close
          </Button>
          {secondaryButtonText ? (
            <Button
              bgColor={secondaryBtnBgColor ? secondaryBtnBgColor : "blue-500"}
              variant="solid"
              textColor={
                secondaryBtnTextColor ? secondaryBtnTextColor : "white"
              }
              className={cn(btnVariants({ roundness }))}
              onClick={handlerForSecondaryButton}
            >
              {secondaryButtonText}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const modalVaraints = cva(
  "flex flex-col align-center z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  {
    variants: {
      theme: {
        light: "bg-stone-100 text-stone-800",
        dark: "bg-slate-800 text-slate-200",
      },
      size: {
        sm: "min-w-[400px] min-h-[200px] max-w-[500px] max-h-[300px]",
        md: "min-w-[500px] min-h-[250px] max-w-[600px] max-h-[350px]",
      },
      roundness: {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      theme: "light",
      size: "sm",
      roundness: "md",
    },
  }
);

const btnVariants = cva("", {
  variants: {
    roundness: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    roundness: "md",
  },
});
