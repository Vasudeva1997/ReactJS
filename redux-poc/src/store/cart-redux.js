import { createSlice } from "@reduxjs/toolkit";
import { UiActions } from "./uiSlice";

const CART_URL =
  "https://redux-advanced-dd105-default-rtdb.firebaseio.com/cart.json";

const initialState = {
  items: [],
  enableSend:false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initItems:(state,action)=>{
      state.items = [...action.payload]
    },
    addItem: (state, action) => {
      let newItem = action.payload;
      let updatedItemIndex = state.items.findIndex(
        (item) => item.title === newItem.title
      );
      if (updatedItemIndex === -1) {
        newItem = {
          ...newItem,
          quantity: 1,
          total: newItem.price,
        };
        state.items.push(newItem);
      } else {
        newItem = {
          ...newItem,
          quantity: state.items[updatedItemIndex].quantity + 1,
          total: (state.items[updatedItemIndex].quantity + 1) * newItem.price,
        };
        state.items[updatedItemIndex] = newItem;
        state.enableSend = true
      }
    },
    removeItem: (state, action) => {
      let newItem = action.payload;
      let updatedItemIndex = state.items.findIndex(
        (item) => item.title === newItem.title
      );
      newItem = {
        ...newItem,
        quantity: state.items[updatedItemIndex].quantity - 1,
        total: (state.items[updatedItemIndex].quantity - 1) * newItem.price,
      };
      if (newItem.quantity === 0) {
        state.items.splice(updatedItemIndex, 1);
      } else {
        state.items[updatedItemIndex] = newItem;
      }
      state.enableSend = true
    },
  },
});

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(CART_URL, {
        method: "PUT",
        body: JSON.stringify(cartData),
      });
      if (!response.ok) {
        throw Error("Something Wrong");
      }
    };
    try {
      await sendRequest();
      dispatch(
        UiActions.showNotification({
          message: "Added to Cart",
          status: "success",
          title: "Added Successfully...!!",
        })
      );
    } catch (err) {
      dispatch(
        UiActions.showNotification({
          message: err.message,
          status: "error",
          title: "Error...!!",
        })
      );
    }
    
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const getCartData = async () => {
      const response = await fetch(CART_URL);
      const responseData = await response.json();
      dispatch(cartActions.initItems(responseData));
    };
    try {
      await getCartData();
    } catch (err) {
      dispatch(
        UiActions.showNotification({
          title: "Fetched Data from DB....!!",
          status: "success",
          message: err.message,
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
