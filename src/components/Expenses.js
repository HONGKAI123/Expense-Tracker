import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title1={props.item[0].title}
        date={props.item[0].date}
        amount={props.item[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title1={props.item[1].title}
        date={props.item[1].date}
        amount={props.item[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title1={props.item[2].title}
        date={props.item[2].date}
        amount={props.item[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title1={props.item[3].title}
        date={props.item[3].date}
        amount={props.item[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
