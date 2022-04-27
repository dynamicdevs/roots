import { FC } from "react";
import { ImageProps } from "../../../types/image.props";

type Props = {
  image: ImageProps;
  title: string;
  description: string;
  caption: string;
}

const Card:FC<Props> = ({image, title, description, caption}) => (
  <div className="p-2 rounded shadow-lg flex flex-col space-y-2">
    <div className="rounded w-full">
      <img src={image.url} alt={image.alt} className="rounded" />
    </div>
    <h3 className="text-heading-08 font-extrabold font-montserrat text-secondary-blue-500">{title}</h3>
    <div className="text-primary-neutral-300">
      <p className="text-paragraph-04 font-semibold ">{description}</p>
      <p className="text-caption-02">{caption}</p>
    </div>
  </div>
)

export default Card;