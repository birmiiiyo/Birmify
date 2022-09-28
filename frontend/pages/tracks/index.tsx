import { Button, Layout, PageHeader } from 'antd';

import React, { FC, useEffect, useState } from 'react';
import RouterButton from '../../components/RouterButton';
import { ITrack } from '../../models/Track';
import TrackList from '../../components/TrackList';
import { useAppSelector } from '../../hooks/Redux';
import Head from 'next/head';
import Input from 'antd/lib/input/Input';
import PaginationComponent from '../../components/Pagination';

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
            <RouterButton key={1} href="tracks/add" type="primary">
              Добавить трек
            </RouterButton>,
          ]}
        />

        <TrackList />
        <PaginationComponent />
      </Layout>
    </>
  );
};

export default Tracks;
