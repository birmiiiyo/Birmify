import { Button, Form, Input, message, Steps } from 'antd';
import { FC, useState } from 'react';
import TrackData from '../../components/steps/TrackData';
import TrackPic from '../../components/steps/FileUpload';
import FileUpload from '../../components/steps/FileUpload';
import { useInput } from '../../hooks/useInput';
import { useRouter } from 'next/router';
import axios from 'axios';
import RouterButton from '../../components/RouterButton';
import Head from 'next/head';

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
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState<any>(null);
  const [audio, setAudio] = useState<any>(null);
  const title = useInput('');
  const author = useInput('');
  const text = useInput('');
  const router = useRouter();
  const complete = () => {
    message.success('Processing complete!');
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('text', text.value);
    formData.append('author', author.value);
    formData.append('picture', picture);
    formData.append('audio', audio);
    axios
      .post('http://localhost:5000/tracks', formData)
      .then(() => router.push('/tracks'))
      .catch((e) => console.log(e));
    setCurrent(0);
  };

  return (
    <>
      <Head>
        <title>Добавление песни</title>
      </Head>
      <RouterButton href="/tracks" key={325253} type="primary">
        Назад
      </RouterButton>
      <h1>Загрузка трека</h1>{' '}
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {' '}
        {current === 0 && (
          <Form
            name="wrap"
            labelCol={{ flex: '200px' }}
            labelAlign="right"
            labelWrap
            wrapperCol={{ flex: '500px' }}
            colon={false}
          >
            <Form.Item label="Название трека" name="title" rules={[{ required: true }]}>
              <Input {...title} />
            </Form.Item>

            <Form.Item label="Исполнитель" name="author" rules={[{ required: true }]}>
              <Input {...author} />
            </Form.Item>
            <Form.Item label="Текст песни" name="text" rules={[{ required: false }]}>
              <Input {...text} />
            </Form.Item>
          </Form>
        )}
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
          <Button type="primary" onClick={complete}>
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
