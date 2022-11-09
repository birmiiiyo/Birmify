import type { NextPage } from 'next';

import Image from 'next/image';
import { useLayoutEffect } from 'react';

const Home: NextPage = () => {
  return (
    <div className="home_img">
      <h3>Home page</h3>
      <Image
        src="https://boundingintocomics.com/wp-content/uploads/2022/10/2022.10.26-02.38-boundingintocomics-63589db92ede2.png"
        width={600}
        height={400}
      />
      <div>
        <h1>Birmify</h1>
        <code> by BirmiiiYo</code>
      </div>
    </div>
  );
};

export default Home;
