import { combineReducers, configureStore } from '@reduxjs/toolkit';

import PlayerReducer from './slices/PlayerSlice';

const rootReducer = combineReducers({
  PlayerReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
