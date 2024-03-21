import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MonsterContext } from "../App";
import "../styles/BestiaryPage.css";

function BestiaryPage() {
  const { id } = useParams();
  const [monster, setMonster] = useState({
    monsterName: "",
    monsterSpriteUrl: "",
    baseHealth: 0,
    extraHealth: 0,
    goldDrop: 0,
    location: 0,
    currentHP: 0,
    items: [],
  });
  const URL = "https://localhost:7249/monsters/";

  useEffect(() => {
    fetch(`${URL}${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setMonster(data.data));
  }, []);
  if (!monster.monsterName) {
    return (
      <div className="bestiaryEntry">
        <div className="parchment2">
        </div>
          <h1>Loading Entry...</h1>
      </div>
    );
  }
  return (
    <div className="bestiaryEntry">
      <div className="parchment2"></div>
      <h1>{monster.monsterName}</h1>
      <ul>
        <li>
          Health: {monster.baseHealth}-
          {monster.baseHealth + monster.extraHealth}
        </li>
        <li>Gold drop: {monster.goldDrop}</li>
        <li>Location: {monster.location}</li>
        {monster.items.map((i, index) => (
          <li key={index}>
            <div>
              Name: {i.itemName}
              <ul>
                <li>Drop rate: {i.dropRate}</li>
                <li>
                  Drop amount: {i.minDrop}-{i.minDrop + i.maxDrop}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <img
        src={[monster.monsterSpriteUrl]}
        alt={monster.monsterName}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default BestiaryPage;
