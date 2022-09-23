import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';

interface TurntableProps {
  active: boolean;
}
const Turntable: FC<TurntableProps> = ({ active }) => {
  return (
    <>
      <Button type="text">{active ? <PlayCircleOutlined /> : <PauseCircleOutlined />}</Button>
    </>
  );
};
export default Turntable;
