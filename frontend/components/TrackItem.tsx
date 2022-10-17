import { Button } from 'antd';
import React, { FC } from 'react';
import { useAppDispatch } from '../hooks/Redux';
import { ITrack } from '../models/Track';
import RouterButton from './RouterButton';
import { PlayerSlice } from '../store/slices/PlayerSlice';

export const TrackItem: FC<ITrack> = ({
  _id,
  audio,
  __v,
  author,
  comments,
  listens,
  picture,
  text,
  title,
}) => {
  const dispatch = useAppDispatch();
  const { setActive, setPlay } = PlayerSlice.actions;
  return (
    <div>
      <h2>{title}</h2>
      <span>{text}</span>
      <div>{author}</div>
      <Button
        onClick={() => {
          dispatch(setActive({ __v, _id, audio, author, comments, listens, picture, text, title }));
          dispatch(setPlay());
        }}
      >
        play
      </Button>
      <RouterButton href={'/tracks/' + _id} key="431gsd3" type="primary">
        To track
      </RouterButton>
    </div>
  );
};
