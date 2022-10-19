import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  active: boolean;
  setActive: Function;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  return ReactDOM.createPortal(
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};
