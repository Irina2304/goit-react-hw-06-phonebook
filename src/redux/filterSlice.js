import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    findName(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReduser = filterSlice.reducer;
export const { findName } = filterSlice.actions;
