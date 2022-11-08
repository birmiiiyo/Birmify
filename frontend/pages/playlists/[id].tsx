import React, { FC } from 'react';

import Router from 'next/router';
import { GetServerSideProps } from 'next';

import axios from 'axios';

import { IPlaylist } from '../../models/Playlist';
import { TrackItem } from '../../components/TrackItem';
import { Button } from 'antd';
import RouterButton from '../../components/RouterButton';

interface TrackProps {
  Playlist: IPlaylist;
}

const Album: FC<TrackProps> = ({ Playlist }) => {
  return (
    <div>
      <RouterButton href="/playlists" type="primary">
        Back to albums
      </RouterButton>
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
      `${process.env.NEXT_PUBLIC_API_key}/playlists/${params?.id}`,
    );

    return { props: { Playlist: res.data } };
  } catch (e) {
    return { props: { error: 'Something went wrong' } };
  }
};

export default Album;
