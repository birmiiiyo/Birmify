import { FC, ReactNode } from 'react';

import { Button } from 'antd';
import styles from './../styles/modal.module.scss';

interface ModalProps {
  active: boolean;
  setActive: Function;
  children: ReactNode;
}
// classname={styles.}active ? 'modal active' : 'modal'
export const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Button onClick={() => setActive(false)}>Close</Button>
      </div>
    </div>
  );
};
