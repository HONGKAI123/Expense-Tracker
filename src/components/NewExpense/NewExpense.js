import { useState } from "react";
import React from "react";
import "./Newxpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onSaveDateHandler = (enterdate) => {
    //这里的onSaveDateHandler会返回expenseform 里面submithandler提交时生成的数据， 将上个表格生成的object
    const expensedate = {
      ...enterdate,
      id: Math.random().toString(), //存在新的object里面
    };
    props.onAdd(expensedate);
    // console.log(expensedate);
  };
  return (
    <div className="new-expense">
      {/* //pass daya from child to parent */}
      {/* 因为这里要传进OnsaveDate这个prop 所以需要再ExpenseForm里面设置Props， 然后再expenseform里面call这个function， onchange不用call是因为他是build in的 */}
      <ExpenseForm onSaveDate={onSaveDateHandler} />
    </div>
  );
}

export default NewExpense;
