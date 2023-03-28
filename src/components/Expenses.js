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
        {props.item.map((data1) => (
          //data 是appjs 里面的array， map这个array里面的东西 然后使用props 设置在expenseitem里面
          <ExpenseItem
            title1={data1.title}
            date={data1.date}
            amount={data1.amount}
          />
        ))}
        {/* {props.item.map((expenses) => (
          <ExpenseItem
            title1={expenses.title}
            date={expenses.date}
            amount={expenses.amount}
          /> //title1是child component 需要接收一些value，  expense是array， 等于把所有props的值在appjs 里面设置
        ))} */}
        {/* <ExpenseItem
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
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
