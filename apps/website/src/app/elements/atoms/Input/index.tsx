import { useState } from "react";

const Input = () => {

  const [text, setText] = useState<string>('');
 
  return (
    <div className="px-2 bg-primary-grey-600 h-8 rounded w-full">
      <input 
        value={text} 
        type="text" 
        onChange={(e) => setText(e.target.value)}
        className="text-button-05 text-primary-grey-200 placeholder:text-primary-grey-400 outline-none h-full w-full"/>
    </div>
  )
};

export default Input;