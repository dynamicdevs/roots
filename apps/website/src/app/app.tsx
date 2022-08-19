import { useEffect, useState } from 'react';
import { client } from '@services/contentfulClient';
import { formatData } from '@utils/util';
import Layout from '@app/elements/organisms/Layout';
import { Home } from '@app/page/Home';
import { RootsProps } from './types/roots.props';

export function App() {
  const [item, setItem] = useState<RootsProps>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'lt-home',
        include: 2,
      });
      const formattedData = formatData(response);

      setItem(formattedData[0]);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {item ? (
        <Layout image={item.image}>
          <Home data={item} />
        </Layout>
      ) : (
        <div>Cargando</div>
      )}
    </div>
  );
}

export default App;