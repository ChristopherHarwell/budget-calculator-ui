import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Data: {},
  loading: true,
};

export const monthlySlice = createSlice({
  name: "monthlyData",
  initialState,
  reducers: {
    monthlydataCall: (state, action) => {
      state.Data = action.payload;
    },
  },
});

export const { monthlydataCall } = monthlySlice.actions;

export default monthlySlice.reducer;
