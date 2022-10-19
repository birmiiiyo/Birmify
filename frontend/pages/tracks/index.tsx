import React, { FC, useEffect } from 'react';

import Head from 'next/head';
import Router from 'next/router';

import { Button, Empty, Layout, PageHeader, Space, Spin } from 'antd';

import RouterButton from '../../components/RouterButton';
import { useAppDispatch, useAppSelector } from '../../hooks/Redux';
import { ErrorMessage } from '../../components/ErrorMessage';
import { TrackItem } from '../../components/TrackItem';
import { getTracks } from '../../store/actions/getTracks';

const Tracks: FC = () => {
  const dispatch = useAppDispatch();
  const { tracks, isLoading, Error } = useAppSelector((state) => state.TrackReducer);

  useEffect(() => {
    dispatch(getTracks());
  }, []);

  if (Error) {
    return <ErrorMessage>{Error}</ErrorMessage>;
  }

  return (
    <>
      <Head>
        <title>Page with tracks</title>
      </Head>
      <Layout>
        <PageHeader
          title="Tracks"
          extra={[
            <RouterButton href="tracks/add" type="primary">
              Add track
            </RouterButton>,
            <Button onClick={() => Router.back()} type="primary">
              To previous
            </Button>,
          ]}
        />
        <Space direction="vertical" size="large">
          {isLoading && <Spin size="large" />}
          {tracks.length === 0 ? (
            <Empty />
          ) : (
            tracks.map((item) => <TrackItem key={item._id} {...item} />)
          )}
        </Space>
      </Layout>
    </>
  );
};

export default Tracks;
