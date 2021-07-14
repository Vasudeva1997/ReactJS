import { useRef } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const onAddClick = (event) => {
    event.preventDefault();
    props.onAdd(inputRef.current.value);
  };
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <label htmlFor={"Quantity_" + props.id}>Quantity</label>
        <input
          className={classes.input}
          ref={inputRef}
          label="Quantity"
          id={"Quantity_" + props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button onClick={onAddClick}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
