import React from "react";
import "./Chart.css";
import Chartbar from "./Chartbar";

function Chart(props) {
  let totalvalue = props.dataset.map((datapoint) => datapoint.value); //把object里面的value拿出来
  const total = Math.max(...totalvalue);
  return (
    <div className="chart">
      {props.dataset.map((datapoint) => (
        <Chartbar
          value={datapoint.value}
          label={datapoint.label}
          maxvalue={total}
          key={datapoint.id}
        />
      ))}
    </div>
  );
}

export default Chart;
