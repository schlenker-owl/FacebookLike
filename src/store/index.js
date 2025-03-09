// src/store/index.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a temporary slice with a reducer
const tempSlice = createSlice({
  name: 'temp',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

const store = configureStore({
  reducer: {
    temp: tempSlice.reducer, // This provides a valid reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;