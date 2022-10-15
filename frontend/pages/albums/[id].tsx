import { FC, useState } from 'react';
import { Button, Card, Input, List } from 'antd';
import RouterButton from '../../components/RouterButton';
import { DeleteOutlined } from '@ant-design/icons';
import { GetServerSideProps } from 'next';
import { ITrack } from '../../models/Track';
import axios from 'axios';
import Image from 'next/image';
import { useInput } from '../../hooks/useInput';
import Item from 'antd/lib/list/Item';
import Head from 'next/head';
import { IAlbum } from '../../models/Album';
import { useAppDispatch, useAppSelector } from '../../hooks/Redux';
import { PlayerSlice } from '../../store/slices/PlayerSlice';

interface TrackProps {
  album: IAlbum;
}

const Album: FC<TrackProps> = ({ album }) => {
  console.log(album);
  const dispatch = useAppDispatch();
  const { isLoading, tracks } = useAppSelector((state) => state.TrackReducer);
  const { active } = useAppSelector((state) => state.PlayerReducer);
  const {} = useAppSelector((state) => state.PlayerReducer);
  const { setActive, setPlay } = PlayerSlice.actions;

  return (
    <>
      <h2>{album.title}</h2>
      <span>{album.description}</span>
      <div>
        {album.tracks.map((item, i) => (
          <div key={item._id + i}>
            {item.title}
            <Button
              key={3242}
              type="text"
              disabled={active === item ? true : false}
              onClick={() => {
                dispatch(setActive(item));
                dispatch(setPlay());
              }}
            >
              play
            </Button>
          </div>
        ))}
      </div>
    </>
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
