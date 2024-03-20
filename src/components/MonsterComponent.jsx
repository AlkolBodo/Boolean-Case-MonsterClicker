import React from "react";
import { useState, useContext, useEffect } from "react";
import { TempContext } from "../App";
import "../styles/monster.css";
import PropTypes from 'prop-types';
import { StatisticContext } from "../App";





const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function MonsterComponent({ currentMonster, spawnMonster}) {
  const { inventory, setInventory } = useContext(StatisticContext);
  const { setCount, setKills, setChance, playClick, playDeath } = useContext(TempContext);
  const [health, setHealth] = useState(0);
  const [rand, setRand] = useState(0);
  const maxHealth = currentMonster.baseHealth;
  const alive = true

 
  useEffect(() => {
    setHealth(currentMonster.baseHealth);
  }, [currentMonster]);


  async function clickingHim() {
    setCount((count) => count + 1);
    if (currentMonster.currentHP > 1) {
      currentMonster.currentHP -= 1
      playClick()
    } else if (currentMonster.currentHP === 1) {
      currentMonster.currentHP = 0
      setKills((kills) => kills + 1);
      playDeath()
      await delay(1500);

      const tempInv = inventory
      tempInv["Gold"] += currentMonster.goldDrop
      Object.keys(currentMonster.items).forEach((key) => {
        const item = currentMonster.items[key];
        tempInv[item.itemName] += item.minDrop
      });
      setInventory(tempInv)
      spawnMonster()
    }
  }

  return (
    <div className="MonsterPage">
      <div className="myProgress">
        <div id="myBar" style={{ width: (currentMonster.currentHP / health) * 100 + "%" }}>
          <p className="healthText">{currentMonster.currentHP}</p>
        </div>
      </div>
      <div className="monsterBox">
          <img
            className={`icon ${currentMonster.currentHP>0 ? "alive" : "dead"}`}
            src={[currentMonster.monsterSpriteUrl]}
            alt="Loading"
            width="100%"
            height="100%"
            onClick={() => {
              clickingHim()
            }}
          />
      </div>
    </div>
  );
}

export default MonsterComponent;

MonsterComponent.propTypes = {
  currentMonster: PropTypes.object,
  spawnMonster: PropTypes.func
}