import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
