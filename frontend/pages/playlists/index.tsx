import React, { FC } from 'react';

import Head from 'next/head';
import Router from 'next/router';

import { Button, Layout, PageHeader } from 'antd';

import RouterButton from '../../components/RouterButton';
import { useAppSelector } from '../../hooks/Redux';
import { ErrorMessage } from '../../components/ErrorMessage';

const Playlists: FC = () => {
  const { Error } = useAppSelector((state) => state.PlaylistReducer);

  if (Error) {
    return <ErrorMessage>{Error}</ErrorMessage>;
  }

  return (
    <>
      <Head>
        <title>Page with playlists</title>
      </Head>
      <Layout>
        <PageHeader
          title="Playlists"
          extra={[
            <RouterButton href="playlists/create" type="primary">
              Create playlist
            </RouterButton>,
            <Button onClick={() => Router.back()} type="primary">
              To previous
            </Button>,
          ]}
        />
        {/* тута отрисовка массива с треками */}
      </Layout>
    </>
  );
};

export default Playlists;
