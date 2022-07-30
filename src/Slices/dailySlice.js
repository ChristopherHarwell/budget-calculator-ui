import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  Data: {},
  loading:true
}

export const dailySlice = createSlice({
  name: 'dailyData',
  initialState,
  reducers: {
 
    dailydataCall: (state, action) => {
    console.log(action.payload,"lololo76")
      state.Data=action.payload
      
 
  
    },
  },
})

// Action creators are generated for each case reducer function
export const { dailydataCall} = dailySlice.actions

export default dailySlice.reducer