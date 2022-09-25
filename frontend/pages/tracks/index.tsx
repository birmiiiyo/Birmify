import { Button, Layout, PageHeader } from 'antd';

import { FC, useState } from 'react';
import RouterButton from '../../components/RouterButton';
import { ITrack } from '../../models/Track';
import TrackList from '../../components/TrackList';
import { useAppSelector } from '../../store/ReduxHook';

const Tracks: FC = () => {
  const { Error } = useAppSelector((state) => state.TrackReducer);

  if (Error) {
    <h1>{Error}</h1>;
  }
  return (
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
    </Layout>
  );
};

export default Tracks;
