import { FC } from 'react';
import { Card } from 'antd';
import RouterButton from '../../components/RouterButton';
import { DeleteOutlined } from '@ant-design/icons';
import { GetServerSideProps } from 'next';
import { ITrack } from '../../models/Track';
import axios from 'axios';
import Image from 'next/image';

interface TrackProps {
  track: ITrack;
}

const Track: FC<TrackProps> = ({ track }) => {
  return (
    <>
      {' '}
      <RouterButton key={5} href="/tracks" type="primary">
        К списку
      </RouterButton>
      <Card title={'Названиe трекa: ' + track?.title} style={{ width: '100%' }}>
        <Card.Grid style={{ width: '28%', textAlign: 'center' }} hoverable={false}>
          Исполнитель: {track?.author}
        </Card.Grid>
        <Card.Grid style={{ width: '28%', textAlign: 'center' }} hoverable={false}>
          <Image
            src={process.env.NEXT_PUBLIC_API_key + '/' + track.picture}
            width={100}
            height={100}
            alt="logo of track"
          />
        </Card.Grid>
        <Card.Grid style={{ width: '28%', textAlign: 'center' }} hoverable={false}>
          Прослушиваний: {track?.listens}
        </Card.Grid>
        <Card.Grid
          style={{ width: '16%', textAlign: 'center' }}
          onClick={() => alert(`delete ${track?.title}`)}
        >
          <DeleteOutlined key={9} />
        </Card.Grid>

        <Card.Grid style={{ width: '100%', textAlign: 'center' }} hoverable={false}>
          Текст: <br />
          {track?.text}
        </Card.Grid>
        <Card.Grid style={{ width: '100%', textAlign: 'center' }} hoverable={false}>
          commentaries
        </Card.Grid>
      </Card>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get<ITrack>(`${process.env.NEXT_PUBLIC_API_key}/tracks/${params?.id}`);

    return { props: { track: res.data } };
  } catch (e) {
    return { props: { error: 'Something went wrong' } };
  }
};

export default Track;
