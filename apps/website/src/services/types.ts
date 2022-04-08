export type ContentfulItemType = {
    fields: FieldType;
    sys: SysType;
}

type FieldType = {
    title: string;
    linkDescription: string;
    links: {
        fields: LinkItemType,
        sys: SysType
    }[];
    mediaDescription: string;
    medias: {
        fields: MediaItemType
        sys: SysType
    }[];
}

type LinkItemType = {
    id: string;
    iconName: string;
    title: string;
    url: string;
}

type MediaItemType = {
    id: string;
    iconName: string;
    subtitle: string;
    title: string;
    url: string;    
}

type SysType = {
    id: string;
}

export type LinkTreeType = {
    id: string;
    title: string;
    linkDescription: string;
    links: LinkItemType[];
    mediaDescription: string;
    medias: MediaItemType[];
}