import { Layout, PageHeader } from 'antd';
import { FC, useEffect } from 'react';
import 'antd/dist/antd.css';
import RouterButton from '../../components/RouterButton';
import Head from 'next/head';
import { useAppDispatch, useAppSelector } from '../../hooks/Redux';
import { getAlbums } from '../../store/actions/getAlbums';
import { AlbumData } from '../../components/AlbumData';

const Albums: FC = () => {
  const { Error, albums, isLoading } = useAppSelector((state) => state.AlbumReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlbums());
  });

  if (Error) {
    return <h1>{Error}</h1>;
  }
  return (
    <>
      <Head>
        <title>Страница с альбомами</title>
      </Head>
      <Layout style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <PageHeader
          title="Альбомы"
          extra={[
            <RouterButton key="ssgdg" href="albums/create" type="primary">
              Создать альбом
            </RouterButton>,
          ]}
        />
        {albums.map((item) => (
          <AlbumData key={item._id} {...item} />
        ))}
      </Layout>
    </>
  );
};

export default Albums;
