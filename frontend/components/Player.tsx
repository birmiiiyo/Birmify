import { PauseCircleOutlined, PlayCircleOutlined, SoundOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Grid, Row, Space } from 'antd';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/Redux';
import { PlayerSlice } from '../store/slices/PlayerSlice';
import styles from '../styles/player.module.scss';
import TrackProgress from './TrackProgress';
let audio: any;

const Player: FC = () => {
  const dispatch = useAppDispatch();
  const { pause, active, currentTime, duration, volume } = useAppSelector(
    (state) => state.PlayerReducer,
  );
  const { setPlay, setPause, setCurrentTime, setDuration, setVolume } = PlayerSlice.actions;

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      audio.play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
      };
    }
  };
  const Play = () => {
    if (pause) {
      dispatch(setPlay());
      audio.play();
    } else {
      dispatch(setPause());
      audio.pause();
    }
  };
  const ChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    dispatch(setVolume(Number(e.target.value)));
  };

  const ChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    dispatch(setCurrentTime(Number(e.target.value)));
  };
  if (currentTime === 60) {
    console.log('post');

    axios.post(process.env.NEXT_PUBLIC_API_key + '/tracks/listen/' + active?._id);
  }
  if (!active) {
    return null;
  }
  return (
    <div className={styles.player}>
      <div className={styles.main}>
        <Button type="text" onClick={Play}>
          {pause ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
        </Button>
        <div className={styles.info}>
          <h3>Name: {active.title}</h3>
          <h5>Artist: {active.author} </h5>
        </div>
      </div>
      <TrackProgress
        left={String(currentTime)}
        right={String(duration)}
        onChange={ChangeCurrentTime}
      />
      <div className={styles.sound}>
        <SoundOutlined />
        <TrackProgress left={volume} right={100} onChange={ChangeVolume} />
      </div>
    </div>
  );
};
export default Player;
