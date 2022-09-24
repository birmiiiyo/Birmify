import { RootState } from './index';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch } from './index';
import { useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
