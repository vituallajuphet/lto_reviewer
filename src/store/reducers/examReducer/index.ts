import { createSlice } from "@reduxjs/toolkit";
import { examAction } from "./reducerActions";

export const examReducer = createSlice({
  name: "exam",
  initialState: {
    score: 0,
    numberOfItems: 40,
    testType: "english" | "tagalog",
    questions: [],
    category: "",
    examStarted: false,
  },
  reducers: {
    ...examAction,
  },
});

export const {
  addScore,
  setCategory,
  setNumberOfItems,
  setQuestion,
  setTestType,
  startExam,
} = examReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getScore = (state) => state.exam.score;
export const getCategory = (state) => state.exam.category;
export const getTestType = (state) => state.exam.testType;
export const getQuestion = (state) => state.exam.questions;
export const getNumberOfItems = (state) => state.exam.numberOfItems;
export const getExamState = (state) => state.exam;

export default examReducer.reducer;
