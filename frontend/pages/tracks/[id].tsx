import { FC, useState } from 'react';
import { Button, Card, Input, List } from 'antd';
import RouterButton from '../../components/RouterButton';
import { DeleteOutlined } from '@ant-design/icons';
import { GetServerSideProps } from 'next';
import { ITrack } from '../../models/Track';
import axios from 'axios';
import Image from 'next/image';
import { useInput } from '../../hooks/useInput';
import Item from 'antd/lib/list/Item';
import Head from 'next/head';

interface TrackProps {
  serverTrack: ITrack;
}

const Track: FC<TrackProps> = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  console.log(track.comments);

  const commentUser = useInput('');
  const commentText = useInput('');
  const addComment = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/tracks/comments`, {
        username: commentUser.value,
        text: commentText.value,
        trackId: track._id,
      });
      if (track.comments !== null) {
        setTrack({ ...track, comments: [...track.comments, response.data] });
      }
    } catch (error) {
      console.log(error);
    }
  };
  track.comments?.map((item) => console.log(item.username));
  return (
    <>
      <Head>
        <title>{track.title}</title>
      </Head>{' '}
      <RouterButton key={5} href="/tracks" type="primary">
        К списку
      </RouterButton>
      <Card title={'Названиe трекa: ' + track?.title} style={{ width: '100%' }}>
        <Card.Grid style={{ width: '28%', textAlign: 'center' }} hoverable={false}>
          Исполнитель: {track?.author}
        </Card.Grid>
        <Card.Grid style={{ width: '28%', textAlign: 'center' }} hoverable={false}>
          <Image
            src={process.env.NEXT_PUBLIC_API_key + '/' + track?.picture}
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
          <div style={{ maxWidth: '40%', margin: '0 auto' }}>
            <h3>Добавить новый комментарий</h3>
            <Input placeholder="username" {...commentUser} />
            <br />
            <br />
            <Input placeholder="text" {...commentText} />
            <br />
            <br />
            <Button onClick={addComment} type="primary">
              Добавить
            </Button>
            <br />
            <br />
          </div>
          {track.comments?.map((comment) => (
            <div>
              <div>Автор - {comment.username}</div>
              <div>Комментарий - {comment.text}</div>
            </div>
          ))}
        </Card.Grid>
      </Card>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get<ITrack>(`${process.env.NEXT_PUBLIC_API_key}/tracks/${params?.id}`);

    return { props: { serverTrack: res.data } };
  } catch (e) {
    return { props: { error: 'Something went wrong' } };
  }
};

export default Track;
