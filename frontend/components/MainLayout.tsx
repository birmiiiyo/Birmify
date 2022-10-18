import { FC } from 'react';
import { useRouter } from 'next/router';

import { Layout, Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

import Player from './Player';

const { Sider, Content } = Layout;

const items = [
  { key: 1, label: 'Auth', disabled: true },
  { key: 2, label: 'Home', disabled: false, href: '/' },
  { key: 3, label: 'Tracks', disabled: false, href: '/tracks' },
  { key: 4, label: 'Playlist', disabled: false, href: '/playlists' },
];

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider>
        <Menu theme="dark" mode="inline">
          {items.map(({ key, label, href, disabled }) => (
            <MenuItem key={key} onClick={() => router.push(href as string)} disabled={disabled}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Sider>
      <Content>{children}</Content>
      <Player />
    </Layout>
  );
};

export default MainLayout;
