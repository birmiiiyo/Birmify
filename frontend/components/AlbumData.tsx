import React, { FC } from 'react';
import { IAlbum } from '../models/Album';
import RouterButton from './RouterButton';

export const AlbumData: FC<IAlbum> = ({ _id, description, likes, title, tracks }) => {
  return (
    <div>
      <h2>{title}</h2>
      <span>{description}</span>
      <div>{likes}</div>
      <div>num of tracks:{tracks.length}</div>
      <RouterButton href={'/albums/' + _id} key="431431413" type="primary">
        To album
      </RouterButton>
    </div>
  );
};
