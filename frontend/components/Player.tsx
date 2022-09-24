import { PauseCircleOutlined, PlayCircleOutlined, SoundOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Grid, Row } from 'antd';
import { FC, useState } from 'react';
import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';
interface TurntableProps {
  active?: boolean;
}
const Player: FC<TurntableProps> = () => {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <div className={styles.player}>
      {' '}
      <Button type="text" onClick={() => setPlay(!play)}>
        {play ? <PlayCircleOutlined /> : <PauseCircleOutlined />}{' '}
      </Button>{' '}
      <div className={styles.info}>
        <h3>Название: </h3>
        <h5>Исполнитель: </h5>
      </div>
      <TrackProgress left={0} right={100} onChange={(e) => ({})} margin="10%" />
      <SoundOutlined style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={(e) => ({})} margin="20px" />
    </div>
  );
};
export default Player;
