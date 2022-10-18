import React, { FC } from 'react';

import { GetServerSideProps } from 'next';

import axios from 'axios';

import { IPlaylist } from '../../models/Playlist';
import { TrackItem } from '../../components/TrackItem';

interface TrackProps {
  Playlist: IPlaylist;
}

const Album: FC<TrackProps> = ({ Playlist }) => {
  return (
    <div>
      <h1>{Playlist.title}</h1>
      <span>{Playlist.description}</span>
      {Playlist.tracks.map((item, i) => (
        <TrackItem key={i} {...item}></TrackItem>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get<IPlaylist>(
      `${process.env.NEXT_PUBLIC_API_key}/albums/${params?.id}`,
    );

    return { props: { Playlist: res.data } };
  } catch (e) {
    return { props: { error: 'Something went wrong' } };
  }
};

export default Album;
