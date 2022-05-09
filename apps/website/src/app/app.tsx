import { useEffect, useState } from 'react';
import { client } from '@services/contentfulClient';
import { RootsType } from '@services/types';
import { formatData } from '@utils/util';
import Layout from '@app/elements/organisms/Layout';
import { Home } from '@app/page/Home';

export function App() {

  const [items, setItems] = useState<RootsType[]>([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try {

      const response = await client.getEntries({ content_type: 'lt-home', include: 2 });
      const formattedData = formatData(response);

      setItems(formattedData);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (    
    <Layout>      
      <Home data={ items[0] }/>
    </Layout>
  );
}

export default App;

