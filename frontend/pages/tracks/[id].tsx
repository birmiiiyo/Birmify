import { FC, useState } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Button, Input, message } from 'antd';

import { useInput } from '../../hooks/useInput';

import { ITrack } from '../../models/Track';
import Image from 'next/image';
import { IComment } from '../../models/Comment';
import { openNotification } from '../../helper/notofication';

interface TrackProps {
  fullDataTrack: ITrack;
}

const TrackPage: FC<TrackProps> = ({ fullDataTrack }) => {
  const [track, setTrack] = useState<ITrack>(fullDataTrack);

  const commentUser = useInput('');
  const commentText = useInput('');

  const addComment = async () => {
    try {
      if (commentText.value.length < 3 && commentUser.value.length < 5) {
        throw 'comment is too short';
      }
      const response = await axios.post(`http://localhost:5000/tracks/comments`, {
        username: commentUser.value,
        text: commentText.value,
        trackId: track._id,
      });
      setTrack({
        ...track,
        comments: track.comments?.concat(response.data) as IComment[],
      });
      openNotification('bottomRight', 'successfully added');
    } catch (error) {
      message.warning(error);
    }
  };
  return (
    <>
      <Head>
        <title>{track.title}</title>
      </Head>
      <div>
        <div className="about">
          <Image
            src={process.env.NEXT_PUBLIC_API_key + '/' + track?.picture}
            width={300}
            height={150}
            alt="logo of track"
          />
          <div className="info">
            <h1>Title: {track.title}</h1>
            <h2>Author: {track.author}</h2>

            <h5>listens: {track.listens}</h5>
          </div>
        </div>
        <div>
          <div className="input-area">
            <h3>Добавить новый комментарий</h3>
            <Input placeholder="username" {...commentUser} />
            <Input placeholder="text" {...commentText} />
            <Button onClick={() => addComment()} type="primary">
              Добавить
            </Button>
          </div>
        </div>
        <h3>Comm section:</h3>
        <ol>
          {track.comments?.map((item) => (
            <li>
              <i>{item.username}</i> said: <strong>{item.text}.</strong>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get<ITrack>(`${process.env.NEXT_PUBLIC_API_key}/tracks/${params?.id}`);

    return { props: { fullDataTrack: res.data } };
  } catch (e) {
    return { props: { error: 'Something went wrong...' } };
  }
};

export default TrackPage;
