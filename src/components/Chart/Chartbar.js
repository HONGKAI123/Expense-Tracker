import React from "react";
import "./Chartbar.css";

function Chartbar(props) {
  let barheight = "0%";
  if (props.maxvalue > 0) {
    //如果有数据， 就会超过0
    barheight = Math.round(props.value / props.maxvalue) * 100 + "%";
  }
  //set style dnaymiclly
  //把这个height 加到下方的style中
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barheight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default Chartbar;
