import { Button, Card, Space } from 'antd';
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
    <Card title={'Name: ' + title} size="default" style={{ margin: '10px' }}>
      <p>Artist: {author}</p>
      <p>Auditions: {listens}</p>
      <Space size="large">
        <Button
          type="primary"
          onClick={() => {
            dispatch(
              setActive({ __v, _id, audio, author, comments, listens, picture, text, title }),
            );
            dispatch(setPlay());
          }}
        >
          play
        </Button>
        <RouterButton href={'tracks/' + _id} type="primary">
          To track
        </RouterButton>
      </Space>
    </Card>
  );
};
