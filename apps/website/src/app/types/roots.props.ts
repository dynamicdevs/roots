import { ImageProps } from "@app/types/image.props";
import { IconProps } from "./icon.props";

type LinkItemProps = {
  id: string;
  title: string;
  url: string;
  icon?: IconProps;
}

type MediaItemProps = {
  id: string;
  description: string;
  subtitle: string;
  title: string;
  url: string;    
  image: ImageProps;
}

type SocialMediaProps = {
  id: string; 
  title: string;
  url: string;
  icon: IconProps;
}

type VideoProps = {
  title: string;
  url: string;
}

type SectionItemProps = {
  title: string;
  cards: MediaItemProps[];
}

export type RootsProps = {
  id: string;
  title: string;
  description: string;
  username: string;
  image: ImageProps;
  links: LinkItemProps[];
  socialMedia: SocialMediaProps[];
  video: VideoProps;
  sections: SectionItemProps[];
}