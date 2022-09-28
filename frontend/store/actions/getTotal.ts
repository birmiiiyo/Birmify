import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTotal = createAsyncThunk('tracks/total', async (_, thunkApi) => {
  try {
    const response = await axios.get<number>(`${process.env.NEXT_PUBLIC_API_key}/tracks/total`);
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Ошибочка');
  }
});
