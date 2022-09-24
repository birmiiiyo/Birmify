import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface playerState {
  authActive: boolean;
  isAuth: boolean;
}

const initialState: playerState = {
  authActive: false,
  isAuth: false,
};

export const PlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
});

export default PlayerSlice.reducer;
