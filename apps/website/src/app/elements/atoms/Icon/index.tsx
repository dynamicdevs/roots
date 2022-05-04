import { SymbolIcon } from "@dynamic-devs/symbol-react";

type Props = {
  name: string;
  url?: string;
}

const Icon = ({ name, url }:Props) => (
  <a href={url} target="_blank" rel="noreferrer" className="flex hover:text-secondary-blue-300 hover:cursor-pointer">
    <SymbolIcon name={name} iconClass="icon-md md:icon-lg" type="outline" />
  </a>
)

export default Icon;