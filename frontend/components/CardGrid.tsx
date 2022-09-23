import { Card } from 'antd';
import { FC, ReactNode } from 'react';
interface CardGridProps {
  children: ReactNode;
}

const CardGrid: FC<CardGridProps> = ({ children }) => {
  return (
    <Card.Grid style={{ width: '80%', textAlign: 'center', margin: '0 auto' }}>
      {children}
    </Card.Grid>
  );
};

export default CardGrid;
