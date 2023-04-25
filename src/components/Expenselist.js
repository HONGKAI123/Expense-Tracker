import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenselist.css";
function Expenselist(props) {
  if (props.item.length === 0) {
    return <h2 className="no-expense">No expense found</h2>;
  }
  return (
    //way2
    //props.item.map((data1) 变成filteritem.map((data1), 把data在map前先filter 一次
    //data 是appjs 里面的array， map这个array里面的东西 然后使用props 设置在expenseitem里面
    <div>
      {props.item.map((data1) => (
        <ExpenseItem
          key={data1.id}
          title1={data1.title}
          date={data1.date}
          amount={data1.amount}
        />
      ))}
    </div>
  );
}

export default Expenselist;
