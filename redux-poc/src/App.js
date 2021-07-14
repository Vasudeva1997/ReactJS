import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/Notification/Notification";
import { fetchCartData, sendCartData } from "./store/cart-redux";

let onLoad = true;

function App() {
  const state = useSelector((store) => store.ui);
  const cartState = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (onLoad) {
      onLoad = false;
      dispatch(fetchCartData());
      return;
    }
    if (cartState.enableSend) dispatch(sendCartData(cartState.items));
  }, [cartState, dispatch]);
  return (
    <React.Fragment>
      {state.notification && (
        <Notification
          title={state.notification.title}
          status={state.notification.status}
          message={state.notification.message}
        />
      )}
      <Layout>
        {state.showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
