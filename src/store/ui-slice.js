import { createSlice } from "@reduxjs/toolkit";
const intialState = { showCard: false, notification: null };
const uiSlice = createSlice({
  name: "ui",
  initialState: intialState,
  reducers: {
    toggle(state, action) {
      state.showCard = !state.showCard;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice;
