// import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { FC } from 'react';

const Track: FC = () => {
  const router = useRouter();
  const id = router.query;
  console.log(id);

  return <div>ку ку ку</div>;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const res = await axios.get<GetReviews>('http://localhost:3004/reviews');

//     return { props: { reviews: res.data } };
//   } catch (e) {
//     return { props: { error: 'Something went wrong' } };
//   }
// };

export default Track;
