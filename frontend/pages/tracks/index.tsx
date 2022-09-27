import { Button, Layout, PageHeader } from 'antd';

import React, { FC, useEffect, useState } from 'react';
import RouterButton from '../../components/RouterButton';
import { ITrack } from '../../models/Track';
import TrackList from '../../components/TrackList';
import { useAppSelector } from '../../hooks/Redux';
import Head from 'next/head';
import Input from 'antd/lib/input/Input';
import { useDispatch } from 'react-redux';
import { searchTracks } from '../../store/actions/searchTrack';

const Tracks: FC = () => {
  const dispatch = useDispatch();
  const { Error } = useAppSelector((state) => state.TrackReducer);
  const [query, setQuery] = useState<string>('');
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // useEffect(() => {
    //   dispatch(searchTracks(query));
    // }, [query]);
  };

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
        <Input value={query} onChange={search} style={{ width: '60%', margin: '10px auto' }} />
        <TrackList query={query} />
      </Layout>
    </>
  );
};

export default Tracks;
