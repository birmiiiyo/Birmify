import { Button, Card, Space } from 'antd';
import React, { FC } from 'react';

import { IPlaylist } from '../models/Playlist';

import RouterButton from './RouterButton';

export const PlaylistItem: FC<IPlaylist> = ({ _id, description, likes, title, tracks }) => {
  return (
    <Card title={'Name: ' + title} size="default" style={{ margin: '10px' }}>
      <p>Description: {description}</p>
      <p>Likes: {likes}</p>
      <p>Tracks: {tracks.length}</p>
      <Space size="large">
        <RouterButton href={'playlists/' + _id} type="primary">
          To Playlist
        </RouterButton>
      </Space>
    </Card>
  );
};
