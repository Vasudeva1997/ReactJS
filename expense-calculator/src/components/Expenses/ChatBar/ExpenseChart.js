import Chart from "./Chart";
const ExpenseChart = (props) => {
  let datapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  //   let maxValue=0;
  for (let exp of props.expenses) {
    const month = exp.date.toLocaleString("en-US", { month: "numeric" });
    const year = exp.date.toLocaleString("en-US", { year: "numeric" });
    if(props.year === year)
        datapoints[month - 1].value += exp.price;
  }
  return props.year==="all" ? null: <Chart dataPoints={datapoints}></Chart>;
};
export default ExpenseChart;
