import { Button, Card, message, Space } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/Redux';
import { ITrack } from '../models/Track';
import RouterButton from './RouterButton';
import { PlayerSlice } from '../store/slices/PlayerSlice';
import { Modal } from '../components/Modal';
import { getPlaylists } from '../store/actions/getPlaylists';
import axios from 'axios';
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
  const { playlists } = useAppSelector((state) => state.PlaylistReducer);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const addTrackToPlaylist = (playlistId: string) => {
    const newTrackInPlaylist = { playlistId, trackId: _id };
    axios.post(process.env.NEXT_PUBLIC_API_key + '/playlists/tracks', newTrackInPlaylist);
    message.success('вы успешно добавили трек в плейлист');
    setActiveModal(false);
  };
  const addToPlaylist = () => {
    if (playlists.length < 1) {
      dispatch(getPlaylists());
    }
    setActiveModal(!activeModal);
  };

  return (
    <>
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
          <Button type="primary" onClick={() => addToPlaylist()}>
            Add to Playlist
          </Button>
          <RouterButton href={'tracks/' + _id} type="primary">
            To track
          </RouterButton>
        </Space>
      </Card>
      <Modal active={activeModal} setActive={setActiveModal}>
        <Space direction="vertical">
          <h2>Add {title} to:</h2>
          {playlists.map((data) => (
            <Button type="link" key={data._id} onClick={() => addTrackToPlaylist(data._id)}>
              {data.title}
            </Button>
          ))}
        </Space>
      </Modal>
    </>
  );
};
