import React, { useState } from "react";
import { useContext } from "react";
import { StatisticContext } from "../App";
import "../styles/Statistics.css";

function Statistics() {
<<<<<<< HEAD
  const { count, kills } = useContext(StatisticContext);
  const [userStatistics, setUserStatistics] = useState([]);
  const URL = 'https://localhost:7249/users/'
  const userid = localStorage.getItem('userid')
=======
  const { count, kills, inventory } = useContext(StatisticContext);
>>>>>>> fc957d34a104f4737a58a443847a135bb9b6c437
  return (
    <div className="stats">
      <table>
        <tr>
          <th>Name:</th>
          <th>Value:</th>
        </tr>
        <tr>
          <th>Clicks</th>
          <td>{count}</td>
        </tr>
        <tr>
          <th>Damage per click</th>
          <td>{1}</td>
        </tr>
        <tr>
          <th>Kills</th>
          <td>{kills}</td>
        </tr>
      {/* </table>
      <table> */}
        <tr>
          <th>Gold</th>
          <td>{inventory.Gold}</td>
        </tr>
        <tr>
          <th>Blob</th>
          <td>{inventory.Blob}</td>
        </tr>
        <tr>
          <th>Bone</th>
          <td>{inventory.Bone}</td>
        </tr>
        <tr>
          <th>Scrap</th>
          <td>{inventory.Scrap}</td>
        </tr>
        <tr>
          <th>Spirit Energy</th>
          <td>{inventory["Spirit energy"]}</td>
        </tr>
      </table>
    </div>
  );
}

export default Statistics;
