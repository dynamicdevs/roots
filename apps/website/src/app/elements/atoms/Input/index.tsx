import { useState } from "react";

type Props = {
  placeholder?: string;
  onKeyDown?: () => void;
}

const Input = ({ placeholder, onKeyDown }:Props) => {

  const [text, setText] = useState<string>('');
 
  return (
    <div className="
        px-2 lg:px-4 bg-primary-grey-600 h-8 lg:h-12 rounded w-full 
      focus-within:border-secondary-blue-500 focus-within:border-2 hover:border-secondary-blue-500 hover:border-2 transition-colors">
      <input 
        value={text} 
        type="text" 
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        className="text-button-05 lg:text-button-04 text-primary-grey-200 placeholder:text-primary-grey-400 outline-none h-full w-full"
        onKeyDown={ (e) => onKeyDown && e.key === 'Enter' && onKeyDown() } />
    </div>
  )
};

export default Input;