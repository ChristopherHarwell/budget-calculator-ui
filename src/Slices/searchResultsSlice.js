import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchResults : null
};

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    saveResults: (state, action) => {
      state.searchResults = action.payload
    },
  },
})

export const { saveResults } = searchResultsSlice.actions

export default searchResultsSlice.reducer