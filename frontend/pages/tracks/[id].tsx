import { useRouter } from 'next/router';
import { FC } from 'react';
import { Card, Layout } from 'antd';
import RouterButton from '../../components/RouterButton';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../store/ReduxHook';

const Track: FC = () => {
  const { tracks } = useAppSelector((state) => state.TrackReducer);
  const router = useRouter();
  const id = router.query;
  const track = tracks.find((track) => track._id === id.id);
  console.log(tracks);

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
          {track?.picture}
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

export default Track;
