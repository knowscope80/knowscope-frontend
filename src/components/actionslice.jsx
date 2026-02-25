import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { 
    darkMode: true, 
    syllabusname:null
  },
  reducers: {
    setSyllabusName: (state, action) => {
      state.syllabusname = action.payload;
    },
    clearSyllabusName: (state) => {
      state.syllabusname = null;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode,setSyllabusName,clearSyllabusName} = appSlice.actions;
export default appSlice.reducer;