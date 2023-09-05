import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./redux/CartReducer";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
