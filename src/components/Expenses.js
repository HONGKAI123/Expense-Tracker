import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const yearchangeHandeler = (years) => {
    setYear(years);
    console.log(years);
  };
  const [year, setYear] = useState("2022"); //这里不会显示default ，除非在filter里面设置default ， 使用props完成
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onsaveyear={yearchangeHandeler} onSelected={year} />
        {/* onsaveyear={yearchangeHandeler} */}
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
    </div>
  );
}

export default Expenses;
