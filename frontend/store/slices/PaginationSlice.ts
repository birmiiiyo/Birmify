import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getTotal } from '../actions/getTotal';

interface PaginationState {
  activePage: number;
  PerPage: number;
  total: number;
}

const initialState: PaginationState = {
  activePage: 1,
  PerPage: 10,
  total: 10,
};

export const PaginationSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActivePage(state, action: PayloadAction<number>) {
      state.activePage = action.payload;
    },
    setItemPerPage(state, action: PayloadAction<number>) {
      state.PerPage = action.payload;
    },
  },
  extraReducers: {
    [getTotal.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    [getTotal.rejected.type]: (state) => {
      state.total = 10;
    },
  },
});

export default PaginationSlice.reducer;
