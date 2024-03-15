import React from "react";
import { useState, useContext, useEffect } from "react";
import { TempContext } from "../App";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function MonsterComponent() {
  const { setCount, setKills, setChance } = useContext(TempContext);
  const [health, setHealth] = useState(0);
  const [rand, setRand] = useState(0);
  const maxHealth = 10;

  
  useEffect(() => {
    setHealth(maxHealth);
    setRand(Math.floor(Math.random() * 3));
  }, []);
  
  const monsters = [
    "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Mysterious%20Bread.png",
    "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Dark%20Finger.png",
    "https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/main/src/assets/Spicy%20Quartz%20Sunflower.png",
  ];

  async function clickingHim() {
    setCount((count) => count + 1);
    setChance(Math.floor(Math.random() * 10));
    // elem.style.width = (width - (count*10)) + "%";
    if (health > 1) {
      setHealth(health - 1);
    } else if (health === 1) {
      setHealth(0);
      setKills((kills) => kills + 1);
      await delay(1000);
      setRand(Math.floor(Math.random() * 3));
      setHealth(maxHealth);
    }
    console.log(health);
  }

  return (
    <div>
      <div id="myProgress">
        <div id="myBar" style={{ width: (health / maxHealth) * 100 + "%" }}>
          <p className="healthText">{health}</p>
        </div>
      </div>
      <div>
        <img
          className="icon"
          src={[monsters[rand]]}
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
