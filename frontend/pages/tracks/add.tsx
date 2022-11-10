import { FC, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Form, Input, message, Steps } from 'antd';

import { useInput } from '../../hooks/useInput';

import FileUpload from '../../components/steps/FileUpload';
import RouterButton from '../../components/RouterButton';
import { openNotification } from '../../helper/notofication';

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
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [picture, setPicture] = useState<any>(null);
  const [audio, setAudio] = useState<any>(null);

  const title = useInput('');
  const author = useInput('');
  const text = useInput('');

  const complete = () => {
    try {
      if (title.value.length < 3) throw 'Title too short';
      if (author.value.length < 3) throw 'Author name too short';

      const formData = new FormData();
      formData.append('title', title.value);
      formData.append('text', text.value);
      formData.append('author', author.value);
      formData.append('picture', picture);
      formData.append('audio', audio);

      axios
        .post('http://localhost:5000/tracks', formData)
        .then(() => router.push('/tracks'))
        .catch(() => {
          return message.error('Something went wrong...');
        });
      setCurrent(0);
      openNotification('bottomRight', 'Added');
    } catch (error) {
      message.warning(error);
    }
  };

  return (
    <>
      <Head>
        <title>Adding a track</title>
      </Head>
      <RouterButton href="/tracks" type="primary">
        Back to tracks
      </RouterButton>
      <h1>Upload track</h1>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {current === 0 && (
          <Form
            name="wrap"
            labelCol={{ flex: '200px' }}
            labelAlign="right"
            labelWrap
            wrapperCol={{ flex: '500px' }}
            colon={false}
          >
            <Form.Item label="Name of the track" name="title" rules={[{ required: true }]}>
              <Input {...title} />
            </Form.Item>

            <Form.Item label="Track artist" name="author" rules={[{ required: true }]}>
              <Input {...author} />
            </Form.Item>
            <Form.Item label="Lyrics" name="text" rules={[{ required: false }]}>
              <Input {...text} />
            </Form.Item>
          </Form>
        )}
        {current === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            Upload cover
          </FileUpload>
        )}
        {current === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            Upload track
          </FileUpload>
        )}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => setCurrent(current + 1)}>
            Next step
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={complete}>
            Сomplete
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => setCurrent(current - 1)}>
            To previous
          </Button>
        )}
      </div>
    </>
  );
};

export default AddTrack;
