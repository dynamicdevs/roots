import { FC } from 'react';
import { ImageProps } from '@app/types/image.props';

type Props = {
  image: ImageProps;
  title: string;
  description: string;
  caption: string;
  className?: string;
  url: string;
};

const Card:FC<Props> = ({
  image,
  title,
  description,
  caption,
  className,
  url,
}) => (
  <a href={url} target="_blank" rel="noreferrer" className={className}>
    <div className="p-2 lg:p-4 rounded shadow-lg flex flex-col space-y-2 bg-primary-grey-600 hover:bg-primary-neutral-100 transition-colors text-left h-full">
      <div className="rounded w-full h-32 lg:h-44">
        <img src={image.url} alt={image.alt} className="rounded object-cover h-full w-full" />
      </div>
      <h3 className="text-heading-08 lg:text-heading-07 font-extrabold font-montserrat text-secondary-blue-500 grow flex items-end line-clamp-2">
        {title}
      </h3>
      <div className="text-primary-neutral-300">
        <p className="text-paragraph-04 lg:text-paragraph-03 font-semibold line-clamp-1">{description}</p>
        <p className="text-caption-02 lg:text-caption-01 line-clamp-1">{caption}</p>
      </div>
    </div>
  </a>
);

export default Card;
