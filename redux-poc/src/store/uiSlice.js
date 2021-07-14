const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  showCart: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    enableNotification(state) {
      state.enableNotification = true;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    resetNotification(state) {
      state.notification = null;
    },
  },
});

export const UiActions = uiSlice.actions;

export default uiSlice;
