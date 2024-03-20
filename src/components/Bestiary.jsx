import React from "react";
import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/Bestiary.css";

import monsters from "../data/monsters";
import BestiaryItem from "./BestiaryItem";

function Beastiary({ monsters }) {
  const [beastiaryData, setBeastiaryData] = useState([]);
  const URL = "https://localhost:7249/monsters/";
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setBeastiaryData(data.data));
  }, []);
  console.log(monsters);
  return (
    <div className="bestiary">
      <ul className="mlist">
        {beastiaryData.map((m, index) => (
          <BestiaryItem key={index} monster={m} />
        ))}
      </ul>
    </div>
  );
}

export default Beastiary;
