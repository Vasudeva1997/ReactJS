import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  

  const addToCart = () => {
    let item = {
      title,
      price,
    };
    dispatch(cartActions.addItem(item));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
