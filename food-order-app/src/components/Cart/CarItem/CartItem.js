import { useContext } from "react";
import CartContext from "../../../store/CartContext/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  let item = {
    name: props.name,
    price: props.price,
    quantity: 1,
    description: props.description,
  };
  const onAddItem = () => {
    cartCtx.addItem(item);
  };
  const onRemoveItem = ()=>{
    cartCtx.removeItem(item)
  }
  return (
    <li className={classes["cart-item"]}>
      <div >
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveItem}>−</button>
        <button onClick={onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
