import { React, useRef, useState } from "react";
import Auxilary from "../../../Helpers/Auxilary";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const titleInputRef = useRef()
  const dateInputRef = useRef()
  const priceInputRef = useRef()
  const [showForm, setShowForm] = useState(false);
  // const [title, setTitle] = useState("");
  // const onTitleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };
  // const [date, setDate] = useState(new Date());
  // const onDateChangeHandler = (event) => {
  //   setDate(event.target.value);
  // };
  // const [price, setPrice] = useState(0);
  // const onPriceChangeHandler = (event) => {
  //   setPrice(event.target.value);
  // };
  const onSumbit = (event) => {
    event.preventDefault();
    let expense = {
      title: titleInputRef.current.value,
      date: new Date(dateInputRef.current.value),
      price: +priceInputRef.current.value,
    };
    props.onAddExpense(expense);
    // setDate("");
    // setTitle("");
    // setPrice("");
    titleInputRef.current.value = ''
    dateInputRef.current.value = ''
    priceInputRef.current.value = ''
  };

  const toggleShowForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const displayCode = () => {
    if (showForm) {
      return (
        <form onSubmit={onSumbit}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                // onChange={onTitleChangeHandler}
                // value={title}
                required
                ref={titleInputRef}
              />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                // onChange={onPriceChangeHandler}
                // value={price}
                required
                ref={priceInputRef}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                // onChange={onDateChangeHandler}
                // value={date}
                ref={dateInputRef}
                required
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={toggleShowForm}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      );
    } else {
      return (
        <Auxilary>
          <button onClick={toggleShowForm}>Add Expense</button>
        </Auxilary>
      );
    }
  };
  return displayCode();
}

export default ExpenseForm;
