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
    playClick,
    playDeath,
    setLocation,
    location,
  } = useContext(TempContext);
  const [health, setHealth] = useState(0);

 
  useEffect(() => {
    setHealth(currentMonster.baseHealth);
  }, [currentMonster]);


  async function clickingHim() {
    setCount((count) => count + 1);
    if (currentMonster.currentHP > 1) {
      currentMonster.currentHP -= 1;
      playClick();
    } else if (currentMonster.currentHP === 1) {
      currentMonster.currentHP = 0;
      setKills((kills) => kills + 1);
      playDeath();
      await delay(1500);

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
      spawnMonster();
    }
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
