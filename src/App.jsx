import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MonsterComponent from "./components/MonsterComponent";
import Beastiary from "./components/Beastiary";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import monsters from "./data/monsters";
import Statistics from "./components/Statistics";
import Upgrades from "./components/Upgrades";

export const NavigateContext = createContext();
export const TempContext = createContext();
export const MonsterContext = createContext();
export const StatisticContext = createContext();

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
  const clickSound = new Audio();
  clickSound.setAttribute(
    "src",
    "https://github.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/raw/juice/src/assets/select-sound-121244.mp3"
  );
  clickSound.volume = 0.5;
  const deathSound = new Audio();
  deathSound.setAttribute(
    "src",
    "https://github.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/raw/juice/src/assets/bouncy-sound-81173.mp3"
  );
  deathSound.volume = 0.5;

  function playClick() {
    clickSound.play();
  }
  function playDeath() {
    deathSound.play();
  }

  const [chance, setChance] = useState(0);

  let newMonster;
  useEffect(() => {
    spawnMonster();
  }, []);
  function spawnMonster() {
    newMonster = structuredClone(
      monsters[Math.floor(Math.random() * monsters.length)]
    );
    newMonster.HP =
      newMonster.HP + Math.floor(Math.random() * newMonster.randomHp);
    newMonster.currentHP = newMonster.HP;
    // console.log(newMonster.sprite);
    console.log(monsters);
    setCurrentMonster(newMonster);
  }
  // useEffect(()=>{
  //   console.log("CHANCE",chance)
  // },[chance])

  return (
    <>
      <div className="app">
        <StatisticContext.Provider
          value={{
            count: count,
            kills: kills,
          }}
        >
          <TempContext.Provider
            value={{
              setCount: setCount,
              setKills: setKills,
              setChance: setChance,
              playClick: playClick,
              playDeath: playDeath,
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
                  <Route path="/upgrades" element={<Upgrades />} />
                  <Route path="/bestiary" element={<Beastiary />} />
                  <Route path="/stats" element={<Statistics />} />
                </Routes>
              </MonsterContext.Provider>
            </div>
          </TempContext.Provider>
        </StatisticContext.Provider>
      </div>
    </>
  );
}

export default App;
