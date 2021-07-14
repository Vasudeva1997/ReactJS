import { useState } from "react";
import "./ExpenseFilter.css"
function ExpenseFilter(props) {
  const [selectedYear,setSelectedYear]=useState("select")
  const onYearChange = (event)=>{
    setSelectedYear(event.target.value)
    props.onYearChange(event.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={onYearChange}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
