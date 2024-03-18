import React from "react";
import { useState, useContext, useEffect } from "react";
import { TempContext } from "../App";
import "../styles/monster.css";
// import monsters from './../data/monsters'
import PropTypes from 'prop-types';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function MonsterComponent({ currentMonster, spawnMonster}) {
  const { setCount, setKills, setChance } = useContext(TempContext);
  const [health, setHealth] = useState(0);
  const [rand, setRand] = useState(0);
  const maxHealth = currentMonster.HP;



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
    setHealth(currentMonster.HP);
    // setRand(Math.floor(Math.random() * 3));
  }, [currentMonster]);

  // const monsters2 = [
  //   "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Mysterious%20Bread.png",
  //   "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Dark%20Finger.png",
  //   "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Spicy%20Quartz%20Sunflower.png",
  // ];

  async function clickingHim() {
    console.log("current hp", currentMonster.currentHP)
    console.log("hp", health)

    setCount((count) => count + 1);
    // setChance(Math.floor(Math.random() * 10));
    // elem.style.width = (width - (count*10)) + "%";
    if (currentMonster.currentHP > 1) {
      currentMonster.currentHP-=1
      // setHealth(health - 1);
    } else if (currentMonster.currentHP === 1) {
      console.log("dead")
      currentMonster.currentHP = 0
      // setHealth(0);
      setKills((kills) => kills + 1);
      await delay(1000);
      spawnMonster()
      // setRand(Math.floor(Math.random() * 3));
      // setHealth(maxHealth);
    }
    // console.log(health);
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
            className="icon"
            src={[currentMonster.sprite]}
            alt="Mystery Bread"
            width="100%"
            height="100%"
            onClick={() => clickingHim()}
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