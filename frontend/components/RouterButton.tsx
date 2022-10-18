import { Button } from 'antd';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import { randomKey } from '../helper/randomKey';

interface ModalProps {
  type: 'link' | 'text' | 'ghost' | 'primary' | 'default' | 'dashed' | undefined;
  children: ReactNode;
  href: string;
}
const RouterButton: FC<ModalProps> = ({ href, type, children }) => {
  const router = useRouter();
  return (
    <Button key={randomKey()} type={type} onClick={() => router.push(href)}>
      {children}
    </Button>
  );
};

export default RouterButton;
