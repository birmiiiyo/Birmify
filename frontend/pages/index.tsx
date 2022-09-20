import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <div>test for api {process.env.NEXT_PUBLIC_TEST}</div>;
};

export default Home;
