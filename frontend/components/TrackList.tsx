import { DeleteOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Row } from 'antd';
import { FC, useState } from 'react';
import { ITrack } from '../models/Track';
import Player from './Player';
import Turntable from './Player';
import RouterButton from './RouterButton';
interface TrackListProps {
  tracks: ITrack[];
  loading: boolean;
}

const TrackList: FC<TrackListProps> = ({ tracks, loading }) => {
  return (
    <List
      bordered
      loading={loading}
      size="large"
      itemLayout="horizontal"
      dataSource={tracks}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Player key={7} />,
            <RouterButton key={3} type="primary" href={`/tracks/${item._id}`}>
              {' '}
              Перейти к треку
            </RouterButton>,
            <DeleteOutlined key={4} onClick={() => alert(`delete ${item.title}`)} />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={item.title}
            description={item.author}
          />
        </List.Item>
      )}
    />
  );
};

export default TrackList;
