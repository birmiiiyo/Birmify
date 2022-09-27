import { ITrack } from './../../models/Track';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchTracks = createAsyncThunk('tracks/search', async (query: string, thunkApi) => {
  try {
    const response = await axios.get<ITrack[]>(
      `${process.env.NEXT_PUBLIC_API_key}/tracks?query=${query}`,
    );
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Ошибочка');
  }
});
