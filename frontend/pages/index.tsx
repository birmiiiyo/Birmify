import type { NextPage } from 'next';

import { Typography } from 'antd';

const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <>
      <Title level={2}>I'm glad to see you</Title>
      <Title level={3}>
        Here you can listen to music, add your own, find or create your playlist
      </Title>
    </>
  );
};

export default Home;
