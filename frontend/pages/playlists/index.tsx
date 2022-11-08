import React, { FC, useEffect, useState } from 'react';

import Head from 'next/head';
import Router from 'next/router';

import { Button, Empty, Layout, PageHeader, Spin } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/Redux';
import { ErrorMessage } from '../../components/ErrorMessage';
import { getPlaylists } from '../../store/actions/getPlaylists';
import { PlaylistItem } from '../../components/PlaylistItem';
import { Modal } from '../../components/Modal';
import { CreatePlaylist } from '../../components/CreatePlaylist';

const Playlists: FC = () => {
  const dispatch = useAppDispatch();

  const [activeCreate, setActiveCreate] = useState<boolean>(false);
  const { playlists, isLoading, Error } = useAppSelector((state) => state.PlaylistReducer);

  useEffect(() => {
    dispatch(getPlaylists());
  }, []);

  if (Error) {
    return <ErrorMessage>{Error}</ErrorMessage>;
  }

  return (
    <>
      <Head>
        <title>Page with playlists</title>
      </Head>
      <Layout>
        <PageHeader
          title="Playlists"
          extra={[
            <Button onClick={() => setActiveCreate(!activeCreate)} type="primary">
              Create playlist
            </Button>,
            <Button onClick={() => Router.back()} type="primary">
              To previous
            </Button>,
          ]}
        />

        {isLoading && <Spin size="large" />}
        {playlists.length === 0 ? (
          <Empty />
        ) : (
          playlists.map((item) => <PlaylistItem key={item._id} {...item} />)
        )}
      </Layout>
      <Modal active={activeCreate} setActive={setActiveCreate}>
        <CreatePlaylist />
      </Modal>
    </>
  );
};

export default Playlists;
