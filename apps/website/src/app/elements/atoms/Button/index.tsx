import { ReactNode } from "react";

type Props = {
  children: ReactNode,
  onClick: () => void;
}

const Button = ({ children, onClick }:Props) => (
  <div 
    className="py-2 px-4 lg:py-4 lg:px-6 h-8 lg:h-12 flex items-center bg-secondary-blue-500 rounded text-center text-button-05 lg:text-button-04 font-bold hover:bg-secondary-blue-400 hover:cursor-pointer" 
    onClick={() => onClick()}>
    {children}
  </div>
);

export default Button;