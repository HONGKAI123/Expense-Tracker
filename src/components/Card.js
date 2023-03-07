import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //设置expensesjs里面的classname 所以css可以work  具体： <Card className="expense-item"> 这里变成‘card expense-item
  return (
    <div className={classes}>
      {/* {classes}  这里不能打印{class} 不然会出现把所有classname打印在页面上 */}
      {props.children}
    </div>
  );
}

export default Card;
