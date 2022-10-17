import { addTrackDto } from './../../../backend/src/dto/add-track.dto';
import { getAlbums } from './../actions/getAlbums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAlbum } from '../../models/Album';

interface TracksState {
  albums: IAlbum[];
  isLoading: boolean;
  Error: string;
}

const initialState: TracksState = {
  albums: [],
  isLoading: false,
  Error: '',
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: {
    [getAlbums.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAlbums.fulfilled.type]: (state, action: PayloadAction<IAlbum[]>) => {
      state.isLoading = false;
      state.Error = '';
      state.albums = action.payload;
    },
    [getAlbums.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.Error = action.payload;
    },
  },
});

export default albumSlice.reducer;
