import { Avatar, Button, Card, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { FC } from 'react';
import { ITrack } from '../models/Track';
import RouterButton from './RouterButton';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <Col span={24}>
      <Card
        style={{
          maxWidth: 1000,
        }}
        actions={[
          <RouterButton key={3} type="primary" href={`/tracks/${track._id}`}>
            {' '}
            Перейти к треку
          </RouterButton>,
        ]}
        extra={[`listens: ${track.listens}`]}
      >
        <Card.Meta
          title={`${track.title}`}
          description={track.text.length < 30 ? track.text : track.text.slice(0, 30) + '...'}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        />
        {}
      </Card>
    </Col>
  );
};

export default TrackItem;
