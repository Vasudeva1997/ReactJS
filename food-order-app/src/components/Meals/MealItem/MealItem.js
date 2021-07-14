import { useContext } from "react";
import CartContext from "../../../store/CartContext/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const meal = {
    description: props.description,
    name: props.name,
    price: price,
  };
  const cartCtx = useContext(CartContext);

  const onAddMeal = (qty) => {
    meal.quantity = +qty;
    cartCtx.addItem(meal);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{meal.price}</div>
      </div>
      <MealItemForm onAdd={onAddMeal}></MealItemForm>
    </li>
  );
};

export default MealItem;
