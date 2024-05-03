import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className="bg-blue-300">{children}</button>;
};
