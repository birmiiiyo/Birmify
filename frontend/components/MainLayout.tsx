import { Layout, Menu } from 'antd';
import { FC, useState } from 'react';
const { Sider, Content } = Layout;
import { useRouter } from 'next/router';
import MenuItem from 'antd/lib/menu/MenuItem';
import Player from './Player';

const items = [
  { key: 1, label: 'Авторизация', disabled: true },
  { key: 2, label: 'Главная', disabled: false, href: '/' },
  { key: 3, label: 'Треки', disabled: false, href: '/tracks' },
  { key: 4, label: 'Альбомы', disabled: false, href: '/albums' },
];

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
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
      <Content
        style={{
          padding: '20px',
        }}
      >
        {children}
      </Content>
      <Player />
    </Layout>
  );
};

export default MainLayout;
