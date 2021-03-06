import GridWrapper from '@app/elements/organisms/GridWrapper';
import LinkCard from '@app/elements/molecules/LinkCard';
import Card from '@app/elements/molecules/Card';

import CardImage01 from '@assets/card-image-01.png';
import CardImage02 from '@assets/card-image-02.png';
import CardImage03 from '@assets/card-image-03.png';
import CardImage04 from '@assets/card-image-04.png';
import CardImage05 from '@assets/card-image-05.png';

import SubscribeBox from '@app/elements/molecules/SubscribeBox';
import VideoEmbed from '@app/elements/atoms/VideoEmbed';
import Icon from '@app/elements/atoms/Icon';

export const Home = () => {

  return (
    <GridWrapper className="bg-primary-grey-600 pb-4 md:pb-6 lg:pb-8">
      <div className="col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 text-center">
        <p className='text-paragraph-04 md:text-paragraph-03 text-primary-neutral-200'>@dynamicdevs</p>
        <h1 className="text-heading-06 md:text-heading-05 lg:text-heading-04 font-bold mt-2 md:mt-4 xl:mt-6 line-clamp-1">Dynamic Devs</h1>
        <p className="text-paragraph-04 md:text-paragraph-03 font-bold mt-2 line-clamp-2">
          Consultoría de desarrollo y tecnología 🖥️
          <br></br>
          📍 Perú, Chile, Colombia, Venezuela, Estados Unidos
        </p>
      </div>
      <div className="
          col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
          flex space-x-6 justify-center text-secondary-blue-400 mt-2 md:mt-4 xl:mt-6 py-2">
            <Icon name="linkedin"  type='outline' url="https://www.linkedin.com/company/dynamic-devs/" />
            <Icon name="instagram" type='outline' url="https://www.instagram.com/dynamicdevs/" />
            <Icon name="youtube"  type='outline' url="https://www.youtube.com/channel/UCD2cpIbELBfK_-9p8PoCGWg" />
            <Icon name="spotify" type='outline' url="https://open.spotify.com/show/4fvKHii2mWHkX8mz28klz8?si=8d16ad1538da4899" />
            <Icon name="twitch" type='outline' url="https://www.twitch.tv/dynamicdevs" />
      </div>
      <div className="
          col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
          flex flex-col space-y-2 md:space-y-4 xl:space-y-6 mt-2 md:mt-4 xl:mt-6">
        <LinkCard
          iconName="dynamic"
          text="La web de Dynamic Devs"
          url="https://www.dynamicdevs.io/"
        />
        <LinkCard
          iconName="briefcase"
          text="Trabaja con nosotros"
          url="https://www.getonbrd.com/companies/dynamic-devs"
          iconType='outline'
        />
        <LinkCard
          iconName="microphone"
          text="Escucha lo último del Podcast"
          url="https://open.spotify.com/show/4fvKHii2mWHkX8mz28klz8?si=d43d25a37ed741c6"
          iconType='outline'
        />
        <LinkCard
          iconName="speak"
          text="DevTalks: Charlas de innovación"
          url="https://www.twitch.tv/dynamicdevs"
          iconType='outline'
        />
      </div>
      <div className='
          col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
          mt-4 md:mt-6 lg:mt-8'>
        <div className='py-2'>
          <h2 className="uppercase text-heading-08-case md:text-heading-07-case font-bold">
            📺 mira el último episodio
          </h2>
        </div>
        <div className='mt-2 lg:mt-4'>
          <VideoEmbed url="https://www.youtube.com/watch?v=WS9H86DEy7Q" />
        </div>
      </div>
      <div className="
          col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
          mt-4 md:mt-6 lg:mt-8">
        <div className="py-2">
          <h2 className="uppercase text-heading-08-case md:text-heading-07-case font-bold">
            🎙 Últimos Podcast
          </h2>
        </div>
      </div>
      <div className='col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4'>
        <div className='roots-gap grid-cols-4 md:grid-cols-10 lg:grid-cols-6 auto-rows-fr'>
          <Card
            image={ { url: CardImage01, alt: 'Imagen de participantes' }}
            title="Cómo Construir y Ser Parte de Equipos Exitosos"
            description="Javiera Tormo y Francisca Carreño"
            caption="Yapo.cl"
            className='col-span-4 md:col-span-5 lg:col-span-3'
            url='https://open.spotify.com/episode/7iV6JOlUpCCY2a6v2xYnAD?si=e7f8b18848d24ffb'  
          />
          <Card 
            image={ { url: CardImage02, alt: 'Imagen de participantes' }}
            title="Blockchain y NFTs: Filosofía, Arte y Tecnología" 
            description="Sergio Borromei" 
            caption="Senior Manager en Mercado Libre"
            className='col-span-4 md:col-span-5 lg:col-span-3'
            url='https://open.spotify.com/episode/0nyNTFF1P3JEegOmIFX8TL?si=771363dd89d14e57'  
           /> 
          <Card 
            image={ { url: CardImage03, alt: 'Imagen de participantes' }}
            title="Mitos y Realidades de los NFTs" 
            description="Rodolfo Finochietti" 
            caption="Qurable"
            className='col-span-4 md:col-span-5 lg:col-span-3'  
            url='https://open.spotify.com/episode/40aVxyl2WHKXFidaskDjTB?si=816d83a514a04be6'  
          />      
        </div>
      </div>
      <div className="
          col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 
          mt-4 md:mt-6 lg:mt-8 py-2">
          <h2 className="uppercase text-heading-08-case md:text-heading-07-case font-bold">
            📖 artículos
          </h2>
      </div>
      <div className='col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4'>
        <div className='roots-gap gap-y-4 grid-cols-4 md:grid-cols-10 lg:grid-cols-6 auto-rows-fr'>
          <Card
            image={ { url: CardImage04, alt: 'Imagen de autor' }}
            title="Cultura Ágil: one for me please"
            description="Rosario Zúñiga Soto"
            caption="COO de Dynamic Devs"
            className='col-span-4 md:col-span-5 lg:col-span-3'
            url='https://www.linkedin.com/pulse/cultura-%C3%A1gil-one-me-please-rosario-z%C3%BA%C3%B1iga-soto/?trk=articles_directory&originalSubdomain=es'  
          />
          <Card 
            image={ { url: CardImage05, alt: 'Imagen de autor' }}
            title="Una conversación acalorada sobre inteligencia artificial y las tecnociencias" 
            description="Marlis Mejías" 
            caption="CMO de Dynamic Devs"
            className='col-span-4 md:col-span-5 lg:col-span-3'
            url='https://www.dynamicdevs.io/blog/una-conversacion-acalorada-inteligencia-artificial' 
          />     
        </div>
      </div>
      <div className="col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4
          mt-4 md:mt-6 lg:mt-8">
        <SubscribeBox />
      </div>
    </GridWrapper>
  );
};
