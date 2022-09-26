import { RootState } from '../store/index';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch } from '../store/index';
import { useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
