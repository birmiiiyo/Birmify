// import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { ITrack } from '../../models/Track';
import { Card, Layout } from 'antd';
import RouterButton from '../../components/RouterButton';
import CardGrid from '../../components/CardGrid';
import Turntable from '../../components/PlayButton';
import { DeleteOutlined } from '@ant-design/icons';

const track: ITrack = {
  _id: '6329c6eeaadf145d3f3a4670',
  title: 'BirmiiiYo',
  author: 'BirmiiiYo',
  text: 'BirmiiiYo',
  listens: 0,
  comments: [],
  __v: 0,
  audio: 'zxc',
  picture: 'zxc',
};

const Track: FC = () => {
  const router = useRouter();
  const id = router.query;
  const track: ITrack = {
    _id: '6329c6eeaadf145d3f3a4670',
    title: 'BirmiiiYo',
    author: 'BirmiiiYo',
    text: 'BirmiiiYo',
    listens: 0,
    comments: [],
    __v: 0,
    audio: 'zxc',
    picture: 'zxc',
  };
  return (
    <>
      {' '}
      <RouterButton key={5} href="/tracks" type="primary">
        К списку
      </RouterButton>
      <Card title={'Названиe трекa: ' + track.title} style={{ width: '100%' }}>
        <Card.Grid style={{ width: '33.33%', textAlign: 'center' }} hoverable={false}>
          Исполнитель: {track.author}
        </Card.Grid>
        <Card.Grid style={{ width: '33.33%', textAlign: 'center' }} hoverable={false}>
          {track.picture}
        </Card.Grid>
        <Card.Grid style={{ width: '33.33%', textAlign: 'center' }} hoverable={false}>
          Прослушиваний: {track.listens}
        </Card.Grid>
        <Card.Grid style={{ width: '85%', textAlign: 'center' }}>
          <Turntable active={true} />
        </Card.Grid>
        <Card.Grid
          style={{ width: '15%', textAlign: 'center' }}
          onClick={() => alert(`delete ${track.title}`)}
        >
          <DeleteOutlined key={9} />
        </Card.Grid>
        <Card.Grid style={{ width: '100%', textAlign: 'center' }} hoverable={false}>
          Текст: <br />
          {track.text}
        </Card.Grid>
        <Card.Grid style={{ width: '100%', textAlign: 'center' }} hoverable={false}>
          commentaries
        </Card.Grid>
      </Card>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const res = await axios.get<GetReviews>('http://localhost:3004/reviews');

//     return { props: { reviews: res.data } };
//   } catch (e) {
//     return { props: { error: 'Something went wrong' } };
//   }
// };

export default Track;
