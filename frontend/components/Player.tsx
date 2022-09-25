import { PauseCircleOutlined, PlayCircleOutlined, SoundOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Grid, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { ITrack } from '../models/Track';
import { useAppDispatch, useAppSelector } from '../store/ReduxHook';
import { PlayerSlice } from '../store/slices/PlayerSlice';
import styles from '../styles/Player.module.scss';
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
      console.log(audio.src);

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
  if (!active) {
    return null;
  }
  return (
    <div className={styles.player}>
      {' '}
      <Button type="text" onClick={Play}>
        {pause ? <PlayCircleOutlined /> : <PauseCircleOutlined />}{' '}
      </Button>{' '}
      <div className={styles.info}>
        <h3>Название: {active.title}</h3>
        <h5>Исполнитель: {active.author} </h5>
      </div>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={ChangeCurrentTime}
        margin="10%"
      />
      <SoundOutlined style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={ChangeVolume} margin="20px" />
    </div>
  );
};
export default Player;
