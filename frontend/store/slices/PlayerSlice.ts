import { ITrack } from './../../models/Track';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

const initialState: PlayerState = {
  active: null,
  currentTime: 0,
  volume: 20,
  duration: 0,
  pause: true,
};

export const PlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActive(state, action: PayloadAction<ITrack>) {
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },
    setPlay(state) {
      state.pause = false;
    },
    setPause(state) {
      state.pause = true;
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export default PlayerSlice.reducer;
