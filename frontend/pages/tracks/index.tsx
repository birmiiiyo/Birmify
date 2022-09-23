import { Button, Layout, PageHeader } from 'antd';

import { FC, useState } from 'react';
import RouterButton from '../../components/RouterButton';
import { ITrack } from '../../models/Track';
import TrackList from '../../components/TrackList';
import Turntable from '../../components/PlayButton';

const tracks: ITrack[] = [
  {
    _id: '6329c6eeaadf145d3f3a4670',
    title: 'BirmiiiYo',
    author: 'BirmiiiYo',
    text: 'BirmiiiYo',
    listens: 0,
    comments: [],
    __v: 0,
    audio: 'zxc',
    picture: 'zxc',
  },
  {
    _id: '6329cdedbaf434d900efd312',
    title: 'BirmiiiYo 1 ',
    author: 'BirmiiiYo 1',
    text: 'BirmiiiYo 1 ',
    listens: 0,
    comments: [],
    __v: 0,
    audio: 'zxc',
    picture: 'zxc',
  },
  {
    _id: '6329d4ba0ddbb87957f6caec',
    title: '123',
    author: '456',
    text: '789',
    listens: 0,
    comments: [],
    __v: 0,
    audio: 'zxc',
    picture: 'zxc',
  },
];

const Tracks: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

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
      <TrackList tracks={tracks} loading={loading} />
    </Layout>
  );
};

export default Tracks;
