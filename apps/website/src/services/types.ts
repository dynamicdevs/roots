export type ContentfulItemType = {
  fields: FieldType;
  sys: SysType;
}

type FieldType = {
  title: string;
  socialMedia: {
    fields: {
      title: string;
      url: string;
      icon: {
        fields: IconType
      }
    },
    sys: SysType
  }[];
  video: {
    fields: VideoType
  };
  links: {
    fields: {
      title: string;
      url: string;
      icon?: {
        fields: IconType
      }
    },
    sys: SysType
  }[];

}

type IconType = {
  name: string;
  style: 'outline' | 'solid';
}

type LinkItemType = {
  id: string;
  title: string;
  url: string;
  icon?: IconType;
}

type MediaItemType = {
  id: string;
  iconName: string;
  subtitle: string;
  title: string;
  url: string;    
}

type SocialMediaType = {
  id: string; 
  title: string;
  url: string;
  icon: IconType;
}

type VideoType = {
  title: string;
  url: string;
}

type SysType = {
  id: string;
}

export type RootsType = {
  id: string;
  title: string;
  links: LinkItemType[];
  socialMedia: SocialMediaType[];
  video: VideoType;
}