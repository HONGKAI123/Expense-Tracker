import { useState } from "react";
import React from "react";
import "./Newxpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [edit, setEdit] = useState(false);
  const addHandler = () => {
    setEdit(true);
  };
  const cancelHandler = () => {
    setEdit(false);
  };
  const onSaveDateHandler = (enterdate) => {
    //这里的onSaveDateHandler会返回expenseform 里面submithandler提交时生成的数据， 将上个表格生成的object
    const expensedate = {
      ...enterdate,
      id: Math.random().toString(), //存在新的object里面
    };
    props.onAdd(expensedate);
    setEdit(false);
    // console.log(expensedate);
  };
  return (
    <div className="new-expense">
      {/* //pass daya from child to parent */}
      {/* 因为这里要传进OnsaveDate这个prop 所以需要再ExpenseForm里面设置Props， 然后再expenseform里面call这个function， onchange不用call是因为他是build in的 */}
      {edit === false && <button onClick={addHandler}>Add NewExpense</button>}
      {edit === true && (
        <ExpenseForm onSaveDate={onSaveDateHandler} onCancel={cancelHandler} />
      )}
    </div>
  );
}

export default NewExpense;
