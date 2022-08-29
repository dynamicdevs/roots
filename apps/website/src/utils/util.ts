import { RootsProps } from "@app/types/roots.props";
import { ContentfulDataType } from '@services/types';

export const formatData = (resp: ContentfulDataType) => {
  const rootsData: RootsProps[] = resp.items.map((item) => {
    const {
      title,
      description,
      username,
      image,
      socialMedia,
      links,
      video,
      sections,
    } = item.fields;

    const socialMediaList = socialMedia?.map((socialMediaItem) => {
      const icon = socialMediaItem.fields.icon.fields;
      return { ...socialMediaItem.fields, icon, id: socialMediaItem.sys?.id };
    });

    const linkList = links?.map((linkItem) => {
      const icon = linkItem.fields.icon
        ? linkItem.fields.icon.fields
        : undefined;
      return { ...linkItem.fields, icon, id: linkItem.sys.id };
    });

    const sectionList = sections?.map((section) => {
      const cards = section.fields.cards.map((card) => {
        const image = card.fields.image.fields;
        return {
          ...card.fields,
          image: { alt: image.description, url: image.file.url },
          id: card.sys.id,
        };
      });
      return { title: section.fields.title, cards };
    });

    return {
      id: item.sys.id,
      title,
      description,
      image: { alt: image.fields?.description, url: image.fields?.file.url },
      username,
      socialMedia: socialMediaList,
      links: linkList,
      video: video.fields,
      sections: sectionList,
    };
  });

  return rootsData;
};
