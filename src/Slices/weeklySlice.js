import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Data: {},
  loading: true,
};

export const weeklySlice = createSlice({
  name: "weeklyData",
  initialState,
  reducers: {
    weeklydataCall: (state, action) => {
      state.Data=action.payload

    },
  },
});

export const { weeklydataCall } = weeklySlice.actions;

export default weeklySlice.reducer;
