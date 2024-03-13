import { useState, useEffect } from "react";
import MBread from "./assets/Mysterious Bread.png";
import Quartz from "./assets/Spicy Quartz Sunflower.png";
import Finger from "./assets/Dark Finger.png";
import "./App.css";

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function App() {
  const [count, setCount] = useState(0);
  const [kills, setKills] = useState(0);
  const [health, setHealth] = useState(0)
  const [chance, setChance] = useState(0)
  const elem = document.getElementById("myBar");
  const maxHealth = 10;
  useEffect(()=>{
    setHealth(maxHealth)
  },[]);

  useEffect(()=>{
    console.log("CHANCE",chance)
  },[chance])
  async function clickingHim(){
    setCount((count) => count + 1)
    setChance(Math.floor(Math.random() * 10))
    // elem.style.width = (width - (count*10)) + "%";
    if (health > 1) {
      setHealth(health-1)
    }
    else if (health ===1 ){
      setHealth(0)
      setKills((kills) => kills + 1)
      await delay(1000);
        setHealth(maxHealth)
    }
    console.log(health)
  }

  return (
    <>
      <div id="myProgress">
        <div id="myBar" style={{ width: ((health)/maxHealth)*100 + "%"}}>
          <p className="healthText">

          {health}
          </p>
        </div>
      </div>
      <div>
        <img
          className="icon"
          src={Finger}
          alt="Mystery Bread"
          width="100%"
          height="100%"
          onClick={() => clickingHim()}
        />
      </div>
      <h1>{chance > 8 ? "CUCK" : "CLICK"} HIM</h1>
      <div className="card">
        <button>count is {count}</button>
        <button>kills are {kills}</button>
      </div>
    </>
  );
}

export default App;
