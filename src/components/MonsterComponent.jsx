import React from "react";
import { useState, useContext, useEffect } from "react";
import { TempContext } from "../App";
import "../styles/monster.css";
// import monsters from './../data/monsters'
import PropTypes from "prop-types";
import { StatisticContext } from "../App";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function MonsterComponent({ currentMonster, spawnMonster }) {
  const { inventory, setInventory } = useContext(StatisticContext);
  const {
    setCount,
    setKills,
    setChance,
    playClick,
    playDeath,
    setLocation,
    location,
  } = useContext(TempContext);
  const [health, setHealth] = useState(0);
  const [rand, setRand] = useState(0);
  const maxHealth = currentMonster.baseHealth;
  const alive = true;

  // console.log("c",currentMonster)

  // const [monsterList, setMonsterList] = useState(monsters);
  // let newMonster;
  // useEffect(()=>{
  //   newMonster = monsters[Math.floor(Math.random() * monsters.length)]
  //   newMonster.HP = newMonster.HP+ Math.floor(Math.random() * newMonster.randomHp)
  //   console.log(newMonster.sprite)
  //   setFMonster(newMonster)
  //   setCurrentMonster(newMonster)
  // },[])

  useEffect(() => {
    setHealth(currentMonster.baseHealth);
    // setRand(Math.floor(Math.random() * 3));
  }, [currentMonster]);

  // const monsters2 = [
  //   "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Mysterious%20Bread.png",
  //   "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Dark%20Finger.png",
  //   "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Spicy%20Quartz%20Sunflower.png",
  // ];

  async function clickingHim() {
    // console.log("current hp", currentMonster.currentHP)
    // console.log("hp", health)

    setCount((count) => count + 1);
    // setChance(Math.floor(Math.random() * 10));
    // elem.style.width = (width - (count*10)) + "%";
    if (currentMonster.currentHP > 1) {
      currentMonster.currentHP -= 1;
      playClick();
      // setHealth(health - 1);
    } else if (currentMonster.currentHP === 1) {
      // console.log("dead")
      currentMonster.currentHP = 0;
      // setHealth(0);
      setKills((kills) => kills + 1);
      playDeath();
      await delay(1500);

      // setInventory({gold: inventory.gold+1})
      const tempInv = inventory;
      tempInv["Gold"] += currentMonster.goldDrop;
      Object.keys(currentMonster.items).forEach((key) => {
        const item = currentMonster.items[key];
        let dropchance = Math.floor(Math.random() * 100);
        console.log(dropchance, item.dropRate);
        if (dropchance < item.dropRate) {
          tempInv[item.itemName] +=
            item.minDrop + Math.floor(Math.random() * item.maxDrop);
        }
      });
      setInventory(tempInv);
      // console.log(inventory)
      spawnMonster();
      // setRand(Math.floor(Math.random() * 3));
      // setHealth(maxHealth);
    }
    // console.log(health);
  }
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setLocation(value);
  };
  if (!currentMonster.monsterName) {
    return (
      <div className="MonsterPage">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <select onChange={handleChange} value={location}>
        <option value="0">Crypt</option>
        <option value="1">Field</option>
        <option value="2">Atlantis</option>
      </select>
      <div className="MonsterPage">
        <div className="myProgress">
          <div
            id="myBar"
            style={{ width: (currentMonster.currentHP / health) * 100 + "%" }}
          >
            <p className="healthText">{currentMonster.currentHP}</p>
          </div>
        </div>
        <div className="monsterBox">
          <img
            className={`icon ${
              currentMonster.currentHP > 0 ? "alive" : "dead"
            }`}
            src={[currentMonster.monsterSpriteUrl]}
            alt="Loading"
            width="100%"
            height="100%"
            onClick={() => {
              clickingHim();
            }}
          />
        </div>
      </div>
      <div className={`b${location}`}></div>
    </>
  );
}

export default MonsterComponent;

MonsterComponent.propTypes = {
  currentMonster: PropTypes.object,
  spawnMonster: PropTypes.func,
};
