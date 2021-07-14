import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import CartContext from "../../store/CartContext/cart-context";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CarItem/CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout/Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        // <li key={item.id}>{item.name}</li>
        <CartItem
          name={item.name}
          price={item.price}
          description={item.description}
          amount={item.quantity}
        />
      ))}
    </ul>
  );

  const orderItems = (userData) => {
    console.log(userData);
    // cartCtx.items
    fetch("https://react-hooks-8fc22-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        order: cartCtx.items,
        user: userData,
      }),
    });
    props.closeCart();
    cartCtx.clearCart()
  };

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      {showCheckout && (
        <Checkout
          onOrder={orderItems}
          onCancel={() => {
            setShowCheckout(false);
          }}
        />
      )}
      {!showCheckout && (
        <div className={classes.actions}>
          <button
            onClick={() => props.closeCart()}
            className={classes["button--alt"]}
          >
            Close
          </button>
          <button
            className={classes.button}
            onClick={() => {
              setShowCheckout(true);
            }}
          >
            Order
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
