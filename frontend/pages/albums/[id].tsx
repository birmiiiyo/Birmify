import React, { FC } from 'react';
import { Button } from 'antd';

import { GetServerSideProps } from 'next';

import axios from 'axios';

import { IAlbum } from '../../models/Album';
import { TrackItem } from '../../components/TrackItem';

interface TrackProps {
  album: IAlbum;
}

const Album: FC<TrackProps> = ({ album }) => {
  return (
    <div>
      <h1>{album.title}</h1>
      <span>{album.description}</span>
      {album.tracks.map((item) => (
        <TrackItem key={item._id} {...item}></TrackItem>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get<IAlbum>(`${process.env.NEXT_PUBLIC_API_key}/albums/${params?.id}`);

    return { props: { album: res.data } };
  } catch (e) {
    return { props: { error: 'Something went wrong' } };
  }
};

export default Album;
