import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 selectedItem:"Savings"
};

export const itemselectedSlice= createSlice({
  name: "itemselected",
  initialState,
  reducers: {

    itemselected: (state, action) => {
       state.selectedItem=action.payload

    },
  },
});

export const { itemselected } = itemselectedSlice.actions;

export default itemselectedSlice.reducer;
