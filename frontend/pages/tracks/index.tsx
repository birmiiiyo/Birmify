import { Button, Layout, PageHeader } from 'antd';

import React, { FC } from 'react';
import RouterButton from '../../components/RouterButton';
import TrackList from '../../components/TrackList';
import { useAppSelector } from '../../hooks/Redux';
import Head from 'next/head';

const Tracks: FC = () => {
  const { Error } = useAppSelector((state) => state.TrackReducer);

  if (Error) {
    <h1>{Error}</h1>;
  }
  return (
    <>
      <Head>
        <title>Страница с песнями</title>
      </Head>
      <Layout style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <PageHeader
          title="Треки"
          extra={[
            <RouterButton key="faasf" href="tracks/add" type="primary">
              Добавить трек
            </RouterButton>,
          ]}
        />
        {/* <TrackList /> */}
      </Layout>
    </>
  );
};

export default Tracks;
