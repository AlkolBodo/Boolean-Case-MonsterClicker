import React, { useState } from "react";
import { useContext } from "react";
import { StatisticContext } from "../App";
import "../styles/Statistics.css";

function Statistics() {
  const { count, kills } = useContext(StatisticContext);
  const [userStatistics, setUserStatistics] = useState([]);
  const URL = 'https://localhost:7249/users/'
  const userid = localStorage.getItem('userid')
  return (
    <div className="stats">
      <button>count is {count}</button>
      <button>kills are {kills}</button>
    </div>
  );
}

export default Statistics;
