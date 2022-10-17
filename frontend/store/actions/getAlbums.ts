import { IAlbum } from './../../models/Album';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAlbums = createAsyncThunk('albums/getAll', async (_, thunkApi) => {
  try {
    const response = await axios.get<IAlbum[]>(process.env.NEXT_PUBLIC_API_key + 'albums');
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Ошибочка');
  }
});
