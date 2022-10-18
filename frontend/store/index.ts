import { combineReducers, configureStore } from '@reduxjs/toolkit';

import PlayerReducer from './slices/PlayerSlice';
import TrackReducer from './slices/TrackSlice';
import PaginationReducer from './slices/PaginationSlice';
import PlaylistReducer from './slices/PlaylistSlice';

const rootReducer = combineReducers({
  PlayerReducer,
  TrackReducer,
  PaginationReducer,
  PlaylistReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
