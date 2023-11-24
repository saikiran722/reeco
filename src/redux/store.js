import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    orderList:orderSlice,

  }
});

export default store;