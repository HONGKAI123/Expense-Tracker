import React, { useState } from "react";

import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import Expenselist from "./Expenselist";
import Expenseschart from "./Expenseschart";

function Expenses(props) {
  const yearchangeHandeler = (years) => {
    setYear(years);
    console.log(years);
  };
  const [year, setYear] = useState("2022"); //这里不会显示default ，除非在filter里面设置default ， 使用props完成
  const filteritem = props.item.filter((expense) => {
    //把所有item拿出来filter ， return 和year 一样的object
    return expense.date.getFullYear().toString() === year;
  });

  //conditonal rendering（way1）
  // let filtercase = <p>nothing here </p>;
  // if (filteritem.length > 0) {
  //   filtercase = filteritem.map((data1) => (
  //     <ExpenseItem
  //       key={data1.id}
  //       title1={data1.title}
  //       date={data1.date}
  //       amount={data1.amount}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onsaveyear={yearchangeHandeler} onSelected={year} />
        <Expenseschart expense={filteritem} />
        <Expenselist item={filteritem} />

        {/* onsaveyear={yearchangeHandeler} */}
        {/* {filteritem.length === 0 && <p>noting here </p>}
        {filteritem.length > 0 &&
          filteritem.map((data1) => (
            //way2
            //props.item.map((data1) 变成filteritem.map((data1), 把data在map前先filter 一次
            //data 是appjs 里面的array， map这个array里面的东西 然后使用props 设置在expenseitem里面
            <ExpenseItem
              key={data1.id}
              title1={data1.title}
              date={data1.date}
              amount={data1.amount}
            />
          ))} */}
        {/* {filteritem.map((data1) => (
          //props.item.map((data1) 变成filteritem.map((data1), 把data在map前先filter 一次
          //data 是appjs 里面的array， map这个array里面的东西 然后使用props 设置在expenseitem里面
          <ExpenseItem
            key={data1.id}
            title1={data1.title}
            date={data1.date}
            amount={data1.amount}
          />
        ))} */}

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
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
