import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getPlaylists } from '../actions/getPlaylists';

import { IPlaylist } from '../../models/Playlist';

interface PlaylistState {
  playlists: IPlaylist[];
  isLoading: boolean;
  Error: string;
}

const initialState: PlaylistState = {
  playlists: [],
  isLoading: false,
  Error: '',
};

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {},
  extraReducers: {
    [getPlaylists.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPlaylists.fulfilled.type]: (state, action: PayloadAction<IPlaylist[]>) => {
      state.isLoading = false;
      state.Error = '';
      state.playlists = action.payload;
    },
    [getPlaylists.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.Error = action.payload;
    },
  },
});

export default playlistSlice.reducer;
