import { Button, Form, Input, message, Steps } from 'antd';
import { FC, useState } from 'react';
import TrackData from '../../components/steps/TrackData';
import TrackPic from '../../components/steps/FileUpload';
import FileUpload from '../../components/steps/FileUpload';

const { Step } = Steps;

const steps = [
  {
    title: 'TrackData',
  },
  {
    title: 'TrackPicture',
  },
  {
    title: 'Music',
  },
];

const AddTrack: FC = () => {
  const [current, setCurrent] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const repeat = () => {
    message.success('Processing complete!');
    setCurrent(0);
  };

  return (
    <>
      <h1>Загрузка трека</h1>{' '}
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {' '}
        {current === 0 && <TrackData />}
        {current === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            Загрузите обложку
          </FileUpload>
        )}
        {current === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            Загрузите аудио
          </FileUpload>
        )}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => setCurrent(current + 1)}>
            Далее
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={repeat}>
            Закончить
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => setCurrent(current - 1)}>
            Назад
          </Button>
        )}
      </div>
    </>
  );
};

export default AddTrack;
