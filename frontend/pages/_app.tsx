import { Provider } from 'react-redux';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { setupStore } from '../store/index';
import MainLayout from '../components/MainLayout';

import '../styles/globals.scss';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Music page</title>
        <meta
          name="description"
          content="Musical platform. Here you can find cool music and share your own, as well as find a playlist for yourself or assemble your own with top tracks."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Music, tracks, artists, albums, spotify,Playlist, playlist,
playlists, yandex music, boom,"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
}

export default MyApp;
