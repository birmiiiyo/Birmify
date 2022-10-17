import Head from 'next/head';
import React from 'react';
import RouterButton from '../../components/RouterButton';

export default function create() {
  return (
    <>
      <Head>
        <title>Создание альбома</title>
      </Head>
      <RouterButton href="/albums" key="f423423432" type="primary">
        Назад
      </RouterButton>
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    </>
  );
}
