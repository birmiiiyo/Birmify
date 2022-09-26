import { Form, Input } from 'antd';
import React, { FC } from 'react';
import styles from '../../styles/FileUpload.module.scss';

interface DataProps {
  title: any;
  text: any;
  author: any;
}

const TrackData: FC<DataProps> = ({ title, author, text }) => {
  return (
    <Form name="wrap" labelAlign="right" labelWrap colon={false}>
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
  );
};
export default TrackData;
