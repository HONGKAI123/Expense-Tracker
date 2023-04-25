import React from "react";
import Chart from "./Chart/Chart";

function Expenseschart(props) {
  const expensechart = [
    { label: "Jan", value: 0 },
    { label: "Fev", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let expense of props.expense) {
    const expenseMonth = expense.date.getMonth(); //这里会拿到固定的一个月份
    expensechart[expenseMonth].value += expense.amount; //
  }
  return (
    <div>
      <Chart dataset={expensechart} />
    </div>
  );
}

export default Expenseschart;
