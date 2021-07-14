import cartSlice from "./cart-redux";

const { configureStore } = require("@reduxjs/toolkit");
const { default: uiSlice } = require("./uiSlice");

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
