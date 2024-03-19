import React from "react";
import { useContext } from "react";
import { StatisticContext } from "../App";

function Statistics() {
  const { count, kills } = useContext(StatisticContext);
  return (
    <div>
      <button>count is {count}</button>
      <button>kills are {kills}</button>
    </div>
  );
}

export default Statistics;
