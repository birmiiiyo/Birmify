import { FC, useState } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Button, Input, message } from 'antd';

import { useInput } from '../../hooks/useInput';

import { ITrack } from '../../models/Track';
import Image from 'next/image';
import { IComment } from '../../models/Comment';

interface TrackProps {
  fullDataTrack: ITrack;
}

const TrackPage: FC<TrackProps> = ({ fullDataTrack }) => {
  const [track, setTrack] = useState<ITrack>(fullDataTrack);

  const commentUser = useInput('');
  const commentText = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/tracks/comments`, {
        username: commentUser.value,
        text: commentText.value,
        trackId: track._id,
      });
      setTrack({
        ...track,
        comments: track.comments?.concat(response.data) as IComment[],
      });
      location.reload();
    } catch (error) {
      message.success('Processing complete!');
    }
  };
  return (
    <>
      <Head>
        <title>{track.title}</title>
      </Head>
      <div>
        <Image
          src={process.env.NEXT_PUBLIC_API_key + '/' + track?.picture}
          width={100}
          height={100}
          alt="logo of track"
        />
        <h1>Title: {track.title}</h1>
        <h2>Author: {track.author}</h2>

        <h5>listens: {track.listens}</h5>
        <div>
          <div>
            <h3>Добавить новый комментарий</h3>

            <Input placeholder="username" {...commentUser} />
            <Input placeholder="text" {...commentText} />
            <Button onClick={() => addComment()}>Добавить</Button>
          </div>
        </div>
        <h5>Comm section:</h5>
        <ol>
          {track.comments?.map((item) => (
            <li>
              {item.text} by {item.username}
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
