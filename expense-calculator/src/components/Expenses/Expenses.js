import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";
import NewExpense from "./NewExpense/NewExpense";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./ChatBar/ExpenseChart";
import { useState } from "react";
function Expenses(props) {
  let new_expenses = props.expenses;
  const [year, setYear] = useState("all");
  const onYearChange = (year) => {
    setYear(year);
  };
  const finalExpenses = () =>{
    if(year !== undefined && year !== "all"){
      new_expenses = new_expenses
        .filter(
          (exp) =>
            exp.date.toLocaleString("en-US", { year: "numeric" }) === year
        )
    }
    if(new_expenses.length === 0){
      return <h2>No Expenses found for {year}...!!</h2>
    }
    return new_expenses.map((exp) => {
          return (
            <ExpenseItem
              key={exp.id}
              date={exp.date}
              title={exp.title}
              price={exp.price}
            ></ExpenseItem>
          );
        })
  }

  return (
    <div className="expenses">
      <NewExpense onAddExpense={props.onAddExpense}></NewExpense>
      <ExpenseFilter
        onYearChange={(year) => onYearChange(year)}
      ></ExpenseFilter>
      <ExpenseChart expenses={new_expenses} year={year}></ExpenseChart>
      {finalExpenses()}
    </div>
  );
}

export default Expenses;
