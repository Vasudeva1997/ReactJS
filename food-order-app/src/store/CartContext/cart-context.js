import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart:()=>{}
});

export default CartContext;
