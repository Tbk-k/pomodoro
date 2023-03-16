import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "../features/styleSlice";
import timerReducer from "../features/pomodoroTimer";

export const store = configureStore({
  reducer: {
    style: styleReducer,
    timer: timerReducer,
  },
});
