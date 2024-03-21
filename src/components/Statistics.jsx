import React from "react";
import { useContext } from "react";
import { StatisticContext } from "../App";
import "../styles/Statistics.css";

function Statistics() {
  const { count, kills } = useContext(StatisticContext);
  return (
    <div className="stats">
      <button>count is {count}</button>
      <button>kills are {kills}</button>
    </div>
  );
}

export default Statistics;
