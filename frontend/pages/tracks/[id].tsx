import { FC, useState } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { message } from 'antd';

import { useInput } from '../../hooks/useInput';

import { ITrack } from '../../models/Track';

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
      if (track.comments !== null) {
        setTrack({ ...track, comments: [...track.comments, response.data] });
      }
    } catch (error) {
      message.success('Processing complete!');
    }
    track.comments?.map((item) => console.log(item.username));
  };
  return (
    <>
      <Head>
        <title>{track.title}</title>
      </Head>
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
