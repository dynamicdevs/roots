import { ContentfulItemType, RootsType } from "../services/types"

export const formatData = (resp: any) => {
  const linkTreeData: RootsType[] = resp.items.map((item: ContentfulItemType) => {

    const {title, socialMedia, links, video} = item.fields;

    const socialMediaList = socialMedia.map((socialMediaItem => {          
      const icon = socialMediaItem.fields.icon.fields;
      return { ...socialMediaItem.fields, icon, id: socialMediaItem.sys.id }
    }));

    const linkList = links.map((linkItem) =>  {
      const icon = linkItem.fields.icon ? linkItem.fields.icon.fields : undefined;
      return { ...linkItem.fields, icon, id: linkItem.sys.id }
    });

    return {
      id: item.sys.id,
      title: title,            
      socialMedia: socialMediaList,
      links: linkList,
      video: video.fields
    }
  })

  return linkTreeData;
}
