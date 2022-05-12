import GridWrapper from '@app/elements/organisms/GridWrapper';
import LinkCard from '@app/elements/molecules/LinkCard';
import Card from '@app/elements/molecules/Card';

import SubscribeBox from '@app/elements/molecules/SubscribeBox';
import VideoEmbed from '@app/elements/atoms/VideoEmbed';
import Icon from '@app/elements/atoms/Icon';
import { Fragment } from 'react';
import { lineBreaks } from '@utils/text';
import { RootsProps } from '@app/types/roots.props';

type HomeProps = {
  data: RootsProps
}

export const Home = ({ data }: HomeProps) => {

  return (
    <GridWrapper className="bg-primary-grey-600 pb-4 md:pb-6 lg:pb-8">
      <div className="col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 text-center">
        <p className='text-paragraph-04 md:text-paragraph-03 text-primary-neutral-200'>{`@${data.username}`}</p>
        <h1 className="text-heading-06 md:text-heading-05 lg:text-heading-04 font-bold mt-2 md:mt-4 xl:mt-6 line-clamp-1">{data.title}</h1>
        <p className="text-paragraph-04 md:text-paragraph-03 font-bold mt-2 line-clamp-2">
          { lineBreaks(data.description) }
        </p>
      </div>
      <div className="
          col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
          flex space-x-6 justify-center text-secondary-blue-400 mt-2 md:mt-4 xl:mt-6 py-2">
            {
              data.socialMedia?.map((socialMediaItem) => 
                <Icon 
                  key={socialMediaItem.id}  
                  name={socialMediaItem.icon.name}  
                  type={socialMediaItem.icon.type} 
                  url={socialMediaItem.url} 
                />)
            }
      </div>
      <div className="
          col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
          flex flex-col space-y-2 md:space-y-4 xl:space-y-6 mt-2 md:mt-4 xl:mt-6">
            {
              data.links.map((linkItem) => 
                <LinkCard
                  key={linkItem.id}
                  iconName={linkItem?.icon?.name}
                  iconType={linkItem?.icon?.type}
                  text={linkItem.title}
                  url={linkItem.url}
                />)
            }
      </div>
      <div className='
          col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
          mt-4 md:mt-6 lg:mt-8'>
        <div className='py-2'>
          <h2 className="uppercase text-heading-08-case md:text-heading-07-case font-bold">
            { data?.video?.title}
          </h2>
        </div>
        <div className='mt-2 lg:mt-4'>    
          <VideoEmbed url={data?.video?.url ?? '' } />
        </div>
      </div>
      {
        data?.sections?.map((section, index) => (
          <Fragment key={`section-${index}`}>
            <div className="
            col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
            mt-4 md:mt-6 lg:mt-8 py-2">
              <h2 className="uppercase text-heading-08-case md:text-heading-07-case font-bold">
                {section.title}
              </h2>
            </div>
            <div className='col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4'>
              <div className='roots-gap grid-cols-4 md:grid-cols-10 lg:grid-cols-6 auto-rows-fr'>
                {
                  section.cards.map((card) => (
                    <Card
                      key={card.id}
                      image={{ url: card.image.url, alt: card.image.alt }}
                      title={card.title}
                      description={card.description}
                      caption={card.subtitle}
                      className='col-span-4 md:col-span-5 lg:col-span-3'
                      url={card.url}  
                    />
                  ))
                }
              </div>
            </div>
          </Fragment>
        ))
      }
      <div className="col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4
          mt-4 md:mt-6 lg:mt-8">
        <SubscribeBox />
      </div>
    </GridWrapper>
  );
};
