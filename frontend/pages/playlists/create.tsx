import React, { FC } from 'react';
import Head from 'next/head';

import RouterButton from '../../components/RouterButton';

const Create: FC = () => {
  return (
    <>
      <Head>
        <title>Playlist creation</title>
      </Head>
      <RouterButton href="/playlists" type="primary">
        Back to playlists
      </RouterButton>
    </>
  );
};

export default Create;
