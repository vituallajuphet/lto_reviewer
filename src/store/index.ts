import { configureStore } from '@reduxjs/toolkit'
import couterSlice from './reducers/slice/couterSlice/'
import screenReducer from './reducers/screenReducer/'
import examReducer from './reducers/examReducer/'

export default configureStore({
  reducer: {
    counter: couterSlice,
    screenstate: screenReducer,
    exam: examReducer,
  },
});
