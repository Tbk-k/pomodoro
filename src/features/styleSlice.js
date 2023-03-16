import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#F87070",
  font: "'Kumbh Sans', sans-serif",
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setFont: (state, action) => {
      state.font = action.payload;
    },
  },
});

export const { setColor, setFont } = styleSlice.actions;
export default styleSlice.reducer;
