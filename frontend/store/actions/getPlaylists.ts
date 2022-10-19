import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IPlaylist } from '../../models/Playlist';

export const getPlaylists = createAsyncThunk('playlist/getAll', async (_, thunkApi) => {
  try {
    const response = await axios.get<IPlaylist[]>(process.env.NEXT_PUBLIC_API_key + '/playlists');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Something went wrong... ' + error);
  }
});
