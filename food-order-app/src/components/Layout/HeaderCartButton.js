import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [bump, setBump] = useState(false);
  const itemCount = cartCtx.items.reduce((currentValue, item) => {
    return currentValue + item.quantity;
  }, 0);
  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${bump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 500);
    return ()=>clearTimeout(timer);
  }, [items]);

  return (
    <button onClick={() => props.showCart()} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
