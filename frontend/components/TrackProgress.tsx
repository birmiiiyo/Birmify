import { FC } from 'react';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: any) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }) => {
  return (
    <div>
      <input type="range" max={right} min={0} value={left} onChange={onChange} />
      <div>
        {' '}
        {left}/{right}
      </div>
    </div>
  );
};

export default TrackProgress;
