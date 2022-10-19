import { Button, Form, Input, message, Space } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const CreatePlaylist: FC = () => {
  const router = useRouter();
  const onFinish = (values: any) => {
    axios.post(process.env.NEXT_PUBLIC_API_key + '/playlists', values);
    message.success('successfully created, it`s time to add tracks to the new album');
    router.push('/tracks');
  };

  const onFinishFailed = (errorInfo: any) => {
    message.warn('Check form');
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Playlist name"
        name="title"
        rules={[{ required: true, message: 'Please input name of playlist!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Playlist description"
        name="description"
        rules={[{ required: true, message: 'Please add some description!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create playlist
        </Button>
      </Form.Item>
    </Form>
  );
};
