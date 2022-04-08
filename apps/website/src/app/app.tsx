// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SymbolIcon } from '@dynamic-devs/symbol-react';
import { useEffect, useState } from 'react';
import { client } from '../services/contentfulClient';
import { LinkTreeType } from '../services/types';
import { formatData } from '../utils/util';

export function App() {

  const [items, setItems] = useState<LinkTreeType[]>([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try {

      const response = await client.getEntries({ content_type: 'lt-home'});
      const formattedData = formatData(response);

      setItems(formattedData);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (    
    <div className='container'>
    {
      items.map((item) => (
        <div key={item.id}>
          <h1 className='text-heading-04'>{item.title}</h1>
          <p className='text-paragraph-03 text-primary-dynamic-700 font-bold'>{item.linkDescription}</p>
          {
            item.links.map((linkItem) => (
              <div key={linkItem.id}>
                <h2 className=''>{linkItem.title}</h2>
              </div>
            ))
          }
          <p className="text-paragraph-03 text-primary-dynamic-700 font-bold">{item.mediaDescription}</p>
          {
            item.medias.map((mediaItem) => (
              <div key={mediaItem.id}>
                <h2>{mediaItem.title}</h2>
                <p className='text-paragraph-04'>{mediaItem.subtitle}</p>
              </div>
            ))
          }
        </div>
      ))
    }
    </div>
  );
}

export default App;

