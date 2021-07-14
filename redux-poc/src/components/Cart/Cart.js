import {  useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

<CartItem item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }} />;

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.items.map((item, i) => {
          return (
            <CartItem
              key={"cart_item_" + i}
              item={{
                title: item.title,
                quantity: item.quantity,
                total: item.total,
                price: item.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
