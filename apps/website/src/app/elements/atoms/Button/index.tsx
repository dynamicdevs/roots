import { ReactNode } from "react";

type Props = {
  children: ReactNode,
}

const Button = ({ children }:Props) => (
  <div className="py-2 px-4 h-8 bg-secondary-blue-500 rounded text-center text-button-05">
    {children}
  </div>
);

export default Button;