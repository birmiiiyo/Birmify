import { combineReducers, configureStore } from '@reduxjs/toolkit';

import PlayerReducer from './slices/PlayerSlice';
import TrackReducer from './slices/TrackSlice';
import PaginationReducer from './slices/PaginationSlice';

const rootReducer = combineReducers({
  PlayerReducer,
  TrackReducer,
  PaginationReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
