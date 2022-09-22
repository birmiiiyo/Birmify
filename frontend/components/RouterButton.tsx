import { Button } from 'antd';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

interface ModalProps {
  key: number;
  type: 'link' | 'text' | 'ghost' | 'primary' | 'default' | 'dashed' | undefined;
  children: ReactNode;
  href: string;
}
const RouterButton: FC<ModalProps> = ({ href, key, type, children }) => {
  const router = useRouter();
  return (
    <Button key={key} type={type} onClick={() => router.push(href)}>
      {children}
    </Button>
  );
};

export default RouterButton;
