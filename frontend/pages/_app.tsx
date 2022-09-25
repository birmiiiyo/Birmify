import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import MainLayout from '../components/MainLayout';
import { Provider } from 'react-redux';
import { setupStore } from '../store/index';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
