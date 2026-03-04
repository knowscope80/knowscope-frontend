// import { createSlice } from '@reduxjs/toolkit';

// const appSlice = createSlice({
//   name: 'app',
//   initialState: { 
//     darkMode: true, 
//     syllabusname:null,
//     studentsclass:null,
//     studentsText:[],
//     studentsdifficulty:null,
//     studentssubject:null

//   },
//   reducers: {
//     setSyllabusName: (state, action) => {
//       state.syllabusname = action.payload;
//     },
//     clearSyllabusName: (state) => {
//       state.syllabusname = null;
//     },
//     toggleDarkMode: (state) => {
//       state.darkMode = !state.darkMode;
//     },
//     addStudentClass: (state, action) => {
//        state.studentsclass=action.payload;
//     },
//     addStudentsubject: (state, action) => {
//        state.studentssubject=action.payload;
//     },
//     addStudentText: (state, action) => {
//        state.studentsText=action.payload;
//     },
//     addStudentdifficulty: (state, action) => {
//        state.studentsdifficulty=action.payload;
//     },

//   },
// });

// export const { toggleDarkMode,setSyllabusName,clearSyllabusName,addStudentClass,addStudentsubject,addStudentText,addStudentdifficulty} = appSlice.actions;
// export default appSlice.reducer;





// appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  syllabusName: null,
  studentsclass: null,
  studentssubject: null,
  studentsText: null,
  studentsdifficulty: null,
  currentTest: null,
  testQuestions: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setSyllabusName: (state, action) => {
      state.syllabusName = action.payload;
    },
    clearSyllabusName: (state) => {
      state.syllabusName = null;
    },
    addStudentClass: (state, action) => {
      state.studentsclass = action.payload;
    },
    addStudentsubject: (state, action) => {
      state.studentssubject = action.payload;
    },
    addStudentText: (state, action) => {
      state.studentsText = action.payload;
    },
    addStudentdifficulty: (state, action) => {
      state.studentsdifficulty = action.payload;
    },
    setCurrentTest: (state, action) => {
      state.currentTest = action.payload;
    },
    setTestQuestions: (state, action) => {
      state.testQuestions = action.payload;
    },
    clearTestData: (state) => {
      state.currentTest = null;
      state.testQuestions = [];
    }
  },
});

export const { 
  toggleDarkMode,
  setSyllabusName,
  clearSyllabusName,
  addStudentClass,
  addStudentsubject,
  addStudentText,
  addStudentdifficulty,
  setCurrentTest,
  setTestQuestions,
  clearTestData
} = appSlice.actions;

export default appSlice.reducer;