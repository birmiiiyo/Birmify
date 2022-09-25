import { getTracks } from './../actions/getTracks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrack } from '../../models/Track';

interface TracksState {
  tracks: ITrack[];
  isLoading: boolean;
  Error: string;
}

const initialState: TracksState = {
  tracks: [],
  isLoading: false,
  Error: '',
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: {
    [getTracks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getTracks.fulfilled.type]: (state, action: PayloadAction<ITrack[]>) => {
      state.isLoading = false;
      state.Error = '';
      state.tracks = action.payload;
    },
    [getTracks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.Error = action.payload;
    },
  },
});

export default trackSlice.reducer;
