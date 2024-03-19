import React from "react";
import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/Bestiary.css";

import monsters from "../data/monsters";
import BestiaryItem from "./BestiaryItem";

function Beastiary() {
  return (
    <div className="bestiary">
      <ul className="mlist">
        {monsters.map((m, index) => (
          <BestiaryItem key={index} monster={m} />
        ))}
      </ul>
    </div>
  );
}

export default Beastiary;
