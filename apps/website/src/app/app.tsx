import { useEffect, useState } from 'react';
import { client } from '@services/contentfulClient';
import { formatData } from '@utils/util';
import Layout from '@app/elements/organisms/Layout';
import { Home } from '@app/page/Home';
import { RootsProps } from './types/roots.props';
import { LoadingPage } from './page/Loading';
import { NoData } from './page/NoData';

export function App() {
  const [item, setItem] = useState<RootsProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [noData, setNoData] = useState<boolean>(false);

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

      if (!formattedData[0].username) {
        setNoData(true);
        return;
      }

      setItem(formattedData[0]);
    } catch (error) {
      setNoData(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : noData && item ? (
        <Layout image={item.image}>
          <Home data={item} />
        </Layout>
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default App;
