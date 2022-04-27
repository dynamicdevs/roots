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
  <a href={url}>
    <div className="bg-secondary-blue-500 text-primary-dynamic-500 rounded p-4 flex space-x-4">
      <SymbolIcon name={iconName} iconClass="symbol-md" />
      <p className="text-center text-paragraph-04 font-bold text-primary-grey-600 w-full">{text}</p>
    </div>
  </a>
)

export default LinkCard;