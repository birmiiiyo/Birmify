import { Row } from 'antd';
import { FC } from 'react';
import { ITrack } from '../models/Track';
import TrackItem from './TrackItem';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        {tracks.map((item) => (
          <TrackItem key={item._id} track={item} />
        ))}
      </Row>
    </>
  );
};

export default TrackList;
