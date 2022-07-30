import { configureStore } from "@reduxjs/toolkit";
import monthlySlice from "./Slices/monthlySlice";
import counterReducer from "./Slices/dailySlice";
import weeklySlice from "./Slices/weeklySlice";
import  itemselectedSlice  from "./Slices/Itemselection";

export const store = configureStore({
  reducer: {
    monthly: monthlySlice,
    weekly: weeklySlice,
    daily: counterReducer,
    selectedItem:itemselectedSlice
  },
});
