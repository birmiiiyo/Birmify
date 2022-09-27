import { Layout, PageHeader } from 'antd';
import { FC } from 'react';
import 'antd/dist/antd.css';
import RouterButton from '../../components/RouterButton';
import Head from 'next/head';

const Albums: FC = () => {
  return (
    <>
      <Head>
        <title>Страница с альбомами</title>
      </Head>
      <Layout style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <PageHeader
          title="Альбомы"
          extra={[
            <RouterButton key={2} href="albums/create" type="primary">
              Создать альбом
            </RouterButton>,
          ]}
        />
      </Layout>
    </>
  );
};

export default Albums;
