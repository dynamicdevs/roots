import { useEffect, useState } from 'react';
import { client } from '@services/contentfulClient';
import { formatData } from '@utils/util';
import Layout from '@app/elements/organisms/Layout';
import { Home } from '@app/page/Home';
import { RootsProps } from './types/roots.props';
import { LoadingPage } from './page/Loading';
import { NoData } from './page/NoData';
import { ContentfulDataType } from '@services/types';

export function App() {
  const [data, setData] = useState<RootsProps | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: ContentfulDataType = await client.getEntries({
        content_type: 'lt-home',
        include: 2,
      });

      if (!response.total) {
        setData(null);
        return;
      }

      const formattedData = formatData(response);
      setData(formattedData[0]);
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <LoadingPage />}
      {data ? (
        <Layout image={data.image}>
          <Home data={data} />
        </Layout>
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default App;
