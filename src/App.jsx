import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MonsterComponent from "./components/MonsterComponent";
import Beastiary from "./components/Beastiary";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import monsters from "./data/monsters";

export const NavigateContext = createContext();
export const TempContext = createContext();
export const MonsterContext = createContext();

function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [count, setCount] = useState(0);
  const [kills, setKills] = useState(0);
  const [currentMonster, setCurrentMonster] = useState({
    id: 2,
    name: "",
    HP: 0,
    randomHp: 0,
    sprite: "",
    currentHP: 0,
  });

  const [chance, setChance] = useState(0);

  let newMonster;
  useEffect(() => {
    spawnMonster()
  }, []);
  function spawnMonster(){
    newMonster = structuredClone(monsters[Math.floor(Math.random() * monsters.length)]);
    newMonster.HP =
      newMonster.HP + Math.floor(Math.random() * newMonster.randomHp);
    newMonster.currentHP = newMonster.HP;
    // console.log(newMonster.sprite);
    console.log(monsters)
    setCurrentMonster(newMonster);
  }
  // useEffect(()=>{
  //   console.log("CHANCE",chance)
  // },[chance])

  return (
    <>
      <div className="app">
        <TempContext.Provider
          value={{
            setCount: setCount,
            setKills: setKills,
            setChance: setChance,
          }}
        >
          <NavigateContext.Provider
            value={{ currentTab: currentTab, setCurrentTab: setCurrentTab }}
          >
            <Header />
            <LeftMenu />
          </NavigateContext.Provider>
          {/* <h1>{chance > 8 ? "CLICK" : "CLICK"} HIM</h1> */}
          <div className="page">
            <MonsterContext.Provider
              value={{
                currentMonster: currentMonster,
                setCurrentMonster: setCurrentMonster,
              }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <MonsterComponent
                      spawnMonster={spawnMonster}
                      currentMonster={currentMonster}
                    />
                  }
                />
                <Route path="/beastiary" element={<Beastiary />} />
              </Routes>
            </MonsterContext.Provider>
            <button>count is {count}</button>
            <button>kills are {kills}</button>
          </div>
        </TempContext.Provider>
      </div>
    </>
  );
}

export default App;
