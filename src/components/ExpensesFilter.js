import React from "react";
// import { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //   const [selectedyear, setSelectedYear] = useState("2022");
  const changeyearHandler = (e) => {
    // console.log(e.target.value);
    // setSelectedYear(e.target.value);
    // console.log(selectedyear);
    // const yeardata = {
    //   year: selectedyear,
    // };
    props.onsaveyear(e.target.value);
    // console.log(yeardata);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeyearHandler} value={props.onSelected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
