import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import MainLayout from '../components/MainLayout';
import { Provider } from 'react-redux';
import { setupStore } from '../store/index';
import Head from 'next/head';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Музыкалькая страница</title>
        <meta
          name="description"
          content="Музыкальная площадка. Здесь каждый может оставить свой трек и оставить комментарий к нему"
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Музыка, треки, артисты,альбомы, spotify, music" />
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
