import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/com/counterSlice'
export const store = configureStore({
  reducer: {
     counter: counterReducer,
  },
})