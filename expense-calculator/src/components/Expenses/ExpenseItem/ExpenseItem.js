import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
function expenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs.{props.price}</div>
      </div>
    </div>
  );
}

export default expenseItem;
