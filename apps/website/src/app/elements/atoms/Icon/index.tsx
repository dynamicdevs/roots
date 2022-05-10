import { SymbolIcon } from "@dynamic-devs/symbol-react";

type Props = {
  name: string;
  url?: string;
  type?: 'solid' | 'outline'
}

const Icon = ({ name, url, type = 'solid' }:Props) => (
  <a href={url} target="_blank" rel="noreferrer" className="flex hover:text-secondary-blue-300 hover:cursor-pointer transition-colors">
    <SymbolIcon name={name} iconClass="icon-md md:icon-lg" type={type} />
  </a>
)

export default Icon;