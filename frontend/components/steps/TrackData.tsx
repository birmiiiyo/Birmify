import { Form, Input } from 'antd';
import React, { FC } from 'react';

const TrackData: FC = () => {
  return (
    <Form
      name="wrap"
      labelCol={{ flex: '200px' }}
      labelAlign="right"
      labelWrap
      wrapperCol={{ flex: '500px' }}
      colon={false}
    >
      <Form.Item label="Название трека" name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Исполнитель" name="author" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Текст песни" name="text" rules={[{ required: false }]}>
        <Input />
      </Form.Item>
    </Form>
  );
};
export default TrackData;
