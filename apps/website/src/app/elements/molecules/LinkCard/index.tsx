import { SymbolIcon } from "@dynamic-devs/symbol-react";
import { FC } from "react";

type Props = {
  iconName: string;
  text: string;
  url: string;
}

const LinkCard:FC<Props> = ({
  iconName,
  text,
  url,
}) => (
  <a href={url} target="_blank" rel="noreferrer">
    <div className="bg-secondary-blue-500 text-primary-dynamic-500 rounded py-4 px-14 relative hover:bg-secondary-blue-400">
      <SymbolIcon name={iconName} iconClass="symbol-md" className="absolute top-1/2 -translate-y-1/2 left-4" />
      <p className="text-center text-paragraph-04 md:text-paragraph-03 font-bold text-primary-grey-600 w-full line-clamp-2">{text}</p>
    </div>
  </a>
)

export default LinkCard;