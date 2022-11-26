import { configureStore } from "@reduxjs/toolkit";
import countSlicce from "./count-slice";
import uiSlice from "./ui-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    count: countSlicce.reducer,
  },
});
export default store;
