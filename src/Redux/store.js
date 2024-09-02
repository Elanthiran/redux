import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import  Cart from "./Reducer/Cart";
const store=configureStore({
  reducer: {
    Cart:Cart,
  },
});

export default store;