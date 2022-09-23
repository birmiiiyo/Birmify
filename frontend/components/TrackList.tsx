import { DeleteOutlined } from '@ant-design/icons';
import { Avatar, List, Row } from 'antd';
import { FC, useState } from 'react';
import { ITrack } from '../models/Track';
import Turntable from './PlayButton';
import RouterButton from './RouterButton';
interface TrackListProps {
  tracks: ITrack[];
  loading: boolean;
}

const TrackList: FC<TrackListProps> = ({ tracks, loading }) => {
  const [play, setPlay] = useState<boolean>(false);
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
            <Turntable key={7} active={play} />,
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
