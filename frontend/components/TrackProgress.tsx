import { FC } from 'react';

interface TrackProgressProps {
  left: number | string;
  right: number | string;
  onChange: (e: any) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }) => {
  return (
    <div>
      <input type="range" max={+right} min={0} value={+left} onChange={onChange} />
      <div>
        {typeof left === 'string'
          ? `${(+left / 60).toFixed(0)}:${+left % 60 < 10 ? '0' + (+left % 60) : +left % 60} `
          : left}
        /{typeof right === 'string' ? ` ${(+right / 60).toFixed(0)}:${+right % 60}` : right}
      </div>
    </div>
  );
};

export default TrackProgress;
