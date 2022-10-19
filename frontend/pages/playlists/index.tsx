import React, { FC, useEffect, useState } from 'react';

import Head from 'next/head';
import Router from 'next/router';

import { Button, Empty, Layout, PageHeader, Spin } from 'antd';

import RouterButton from '../../components/RouterButton';
import { useAppDispatch, useAppSelector } from '../../hooks/Redux';
import { ErrorMessage } from '../../components/ErrorMessage';
import { getPlaylists } from '../../store/actions/getPlaylists';
import { PlaylistItem } from '../../components/PlaylistItem';
import { Modal } from '../../components/Modal';

const Playlists: FC = () => {
  const dispatch = useAppDispatch();
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
            <RouterButton href="playlists/create" type="primary">
              Create playlist
            </RouterButton>,
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
    </>
  );
};

export default Playlists;
