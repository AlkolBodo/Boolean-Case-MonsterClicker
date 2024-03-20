import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MonsterContext } from "../App";

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
  const URL = "https://localhost:7249/monsters/"

  useEffect(() => {
    fetch(`${URL}${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setMonster(data.data));
  }, []);
  return (
    <div>
      BestiaryPage
      <p>{monster.monsterName}</p>
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
