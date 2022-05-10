import { ContentfulItemType, LinkTreeType } from "../services/types"

export const formatData = (resp: any) => {
    const linkTreeData: LinkTreeType[] = resp.items.map((item: ContentfulItemType) => {
        const {title, linkDescription, links, mediaDescription, medias} = item.fields;

        const linkList = links.map((linkItem) =>  ({ ...linkItem.fields, id: linkItem.sys.id}));
        const mediaList = medias.map((mediaItem) => ({...mediaItem.fields, id: mediaItem.sys.id}));
        
        return {
            id: item.sys.id,
            title: title,
            linkDescription: linkDescription,            
            mediaDescription: mediaDescription,
            links: linkList,
            medias: mediaList
        }
    })

    return linkTreeData;
}
