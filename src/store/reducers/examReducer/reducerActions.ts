const addScore = (state) => {
  return { ...state, score: state.score + 1 };
};

const setNumberOfItems = (state, action) => {
  state.numberOfItems = action.payload;
};

const setTestType = (state, action) => {
  state.testType = action.payload;
};

const setQuestion = (state, action) => {
  return { ...state, questions: action.payload };
};

const setCategory = (state, action) => {
  return { ...state, category: action.payload };
};

const startExam = (state) => {
  return { ...state, examStarted: true };
};

export const examAction = {
  addScore,
  setNumberOfItems,
  setTestType,
  setQuestion,
  setCategory,
  startExam,
};
