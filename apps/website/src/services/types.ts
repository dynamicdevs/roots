import { IconProps } from "@app/types/icon.props";

export type ContentfulDataType = {
  items: ContentfulItemType[];
  total: number;
};

type ContentfulItemType = {
  fields: FieldType;
  sys: SysType;
};

type Field<T> = {
  fields: T;
  sys: SysType;
};

type ImageType = {
  title: string;
  description: string;
  file: {
    url: string;
  };
};

type MediaType = {
  title: string;
  url: string;
  icon: {
    fields: IconProps;
  };
};

type CardType = {
  description: string;
  subtitle: string;
  title: string;
  url: string;
  image: Field<ImageType>;
};

type SectionType = {
  title: string;
  cards: Field<CardType>[];
};

type VideoType = {
  title: string;
  url: string;
};

type FieldType = {
  title: string;
  description: string;
  username: string;
  image: Field<ImageType>;
  socialMedia: Field<MediaType>[];
  video: Field<VideoType>;
  links: Field<MediaType>[];
  sections: Field<SectionType>[];
};

type SysType = {
  id: string;
};
