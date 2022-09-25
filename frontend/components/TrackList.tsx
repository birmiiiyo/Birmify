import { DeleteOutlined, PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Row } from 'antd';
import { FC, useEffect } from 'react';
import { ITrack } from '../models/Track';
import { getTracks } from '../store/actions/getTracks';
import { useAppDispatch, useAppSelector } from '../store/ReduxHook';
import { PlayerSlice } from '../store/slices/PlayerSlice';
import { trackSlice } from '../store/slices/TrackSlice';

import RouterButton from './RouterButton';

const TrackList: FC = () => {
  const dispatch = useAppDispatch();
  const { Error, isLoading, tracks } = useAppSelector((state) => state.TrackReducer);
  const { active } = useAppSelector((state) => state.PlayerReducer);
  const {} = useAppSelector((state) => state.PlayerReducer);
  const { setActive, setPlay } = PlayerSlice.actions;

  useEffect(() => {
    dispatch(getTracks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <List
      bordered
      loading={isLoading}
      size="large"
      itemLayout="horizontal"
      dataSource={tracks}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              key={3242}
              type="text"
              disabled={active === item ? true : false}
              onClick={() => {
                dispatch(setActive(item));
                dispatch(setPlay());
              }}
            >
              {active === item ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            </Button>,
            <RouterButton key={3} type="primary" href={`/tracks/${item._id}`}>
              {' '}
              Перейти к треку
            </RouterButton>,
            <DeleteOutlined key={4} onClick={() => alert(`delete ${item.title}`)} />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={item.title}
            description={item.author}
          />
        </List.Item>
      )}
    />
  );
};

export default TrackList;
