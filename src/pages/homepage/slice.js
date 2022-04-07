import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homepageData: {
    data: 'Hello World'
  }
};

export const homepageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    updateValue: (state, { payload }) => {
      state.homepageData[payload.data] = payload.value;
    }
  }
});

export const { updateValue } = homepageSlice.actions;

export default homepageSlice.reducer;
