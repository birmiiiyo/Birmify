import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from '../hooks/Redux';
import { PaginationSlice } from '../store/slices/PaginationSlice';

const PaginationComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setActivePage } = PaginationSlice.actions;
  const { PerPage, activePage, total } = useAppSelector((state) => state.PaginationReducer);
  console.log(total, PerPage, activePage);

  const onChange: PaginationProps['onChange'] = (page) => {
    setActivePage(page);
  };

  return (
    <Pagination
      current={activePage}
      onChange={onChange}
      total={total}
      style={{ margin: '20px auto' }}
    />
  );
};

export default PaginationComponent;
