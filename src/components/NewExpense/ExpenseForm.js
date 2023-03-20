import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // alterntive way: sperate 3 states
  const [entertitle, setEntertitle] = useState("");
  const [enterdate, setEneterdate] = useState("");
  const [enteramount, setEnteramount] = useState("");

  // manage all state in one slice, set useState to object
  //   const [userinput, setUserInput] = useState({
  //     entertitle: "", //将所有current state 放入一个object里面
  //     enterdate: "",
  //     enteramount: "",
  //   });
  const titleChangeHandler = (e) => {
    setEntertitle(e.target.value);
    // in one object
    //同时也返回object， 但是如果只返回一个值， 其他state的数据会丢失， 必须确保其他state的值也存储着，所以使用...
    //...userinput会在每次re execute的时候保存之前其他state的值
    // setUserInput({ entertitle: "e.target.value", ...userinput });
    //这种方式会导致react 给错误的state snapshot；
    //使用下面的方法确保react 总是给你last 的 state
    //     setUserInput((prevstate) => {
    //       return { ...prevstate, entertitle: "e.target.value" };
    //     });
  };
  const dateChangehandler = (e) => {
    setEneterdate(e.target.value);
    // setUserInput({ enterdate: "e.target.value", ...userinput });
  };
  const amountChangehandler = (e) => {
    setEnteramount(e.target.value);
    // setUserInput({ entertitle: "e.target.value", ...userinput });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      //store all the input value into an object
      title: entertitle,
      amount: enteramount,
      date: new Date(enterdate),
    };
    //two way bind, after submit, rest input
    // need to add a value attribute on that html class
    // set the value attr to first state(first element of useState).
    // and then update the state
    setEntertitle("");
    setEnteramount("");
    setEneterdate("");

    console.log(expense);
  };

  return (
    //当button type是submit 并且在form里面的时候， form会生成一个event
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entertitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>DATE</label>
          <input
            type="date"
            onChange={dateChangehandler}
            min="2019-01-03"
            max="2023-3-30"
            value={enterdate}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="num"
            onChange={amountChangehandler}
            min="0.01"
            step="0.01"
            value={enteramount}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button> dang
      </div>
    </form>
  );
}

export default ExpenseForm;
