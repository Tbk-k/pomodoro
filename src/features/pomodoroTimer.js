import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

export const pomodoroTimer = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updatePomodoro: (state, action) => {
      state.pomodoro = action.payload;
    },
    updateShortBreak: (state, action) => {
      state.shortBreak = action.payload;
    },
    updateLongBreak: (state, action) => {
      state.longBreak = action.payload;
    },
  },
});

export const { updatePomodoro, updateShortBreak, updateLongBreak } =
  pomodoroTimer.actions;
export default pomodoroTimer.reducer;
