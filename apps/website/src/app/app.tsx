// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SymbolIcon } from '@dynamic-devs/symbol-react';
import { useEffect, useState } from 'react';
import { client } from '../services/contentfulClient';
import { LinkTreeType } from '../services/types';
import { formatData } from '../utils/util';
import Footer from './elements/organisms/Footer';
import Layout from './elements/organisms/Layout';
import { Home } from './page/Home';

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
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;

