import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;
  if (action.type === "ADD") {
    const updateIndex = state.items.findIndex(
      (item) => item.name === action.val.name
    );
    if (updateIndex > -1) {
      updatedItems = [...state.items];
      updatedItems[updateIndex] = {
        ...state.items[updateIndex],
        quantity: updatedItems[updateIndex].quantity + action.val.quantity,
      };
    } else {
      updatedItems = state.items.concat(action.val);
    }
    // const totalPrice = updateIndex === -1?
    return {
      ...state,
      items: [...updatedItems],
      totalAmount:
        state.totalAmount +
        +action.val.price.replace("$", "") * action.val.quantity,
    };
  }

  if (action.type === "REMOVE") {
    const updateIndex = state.items.findIndex(
      (item) => item.name === action.val.name
    );
    updatedItems = [...state.items];
    if (updatedItems[updateIndex].quantity === 1) {
      updatedItems.splice(updateIndex, 1);
    } else {
      updatedItems[updateIndex] = {
        ...state.items[updateIndex],
        quantity: updatedItems[updateIndex].quantity - 1,
      };
    }
    return {
      ...state,
      items: [...updatedItems],
      totalAmount: state.totalAmount - +action.val.price.replace("$", ""),
    };
  }

  if (action.type === "CLEAR") {
    return defaultState;
  }

  return defaultState;
};

const CartContextProvider = (props) => {
  // const [items,setItems] = useState([])
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultState);
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      onAddItem(item);
    },
    removeItem: (item) => {
      onRemoveItem(item);
    },
    clearCart: () => {
      clearCart();
    },
  };

  const onRemoveItem = (item) => {
    cartDispatcher({ type: "REMOVE", val: item });
  };

  const onAddItem = (item) => {
    cartDispatcher({ type: "ADD", val: item });
  };

  const clearCart = () => {
    cartDispatcher({ type: "CLEAR" });
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
