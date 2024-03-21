import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MonsterComponent from "./components/MonsterComponent";
import Bestiary from "./components/Bestiary";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Statistics from "./components/Statistics";
import Upgrades from "./components/Upgrades";
import BestiaryPage from "./components/BestiaryPage";
import Login from "./components/Login";
import Register from "./components/Register";

export const NavigateContext = createContext();
export const TempContext = createContext();
export const MonsterContext = createContext();
export const StatisticContext = createContext();

function App() {
  const [currentTab, setCurrentTab] = useState("login");
  const [count, setCount] = useState(0);
  const [kills, setKills] = useState(0);
  //const [isLoggedIn, setLoggedIn] = useState(false);
  const [test, setTest] = useState({
    monsterName: "",
    monsterSpriteUrl: "",
    baseHealth: 0,
    extraHealth: 0,
    goldDrop: 0,
    location: 0,
    currentHP: 0,
    items: [],
  });
  const [currentMonster, setCurrentMonster] = useState({
    id: 2,
    name: "",
    HP: 0,
    randomHp: 0,
    sprite: "",
    currentHP: 0,
  });
  const [inventory, setInventory] = useState({
    Gold: 0,
    Blob: 0,
    Bone: 0,
    Scrap: 0,
    "Spirit energy": 0,
  });
  const clickSound = new Audio();
  clickSound.setAttribute(
    "src",
    "https://github.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/raw/main/src/assets/select-sound-121244.mp3"
  );
  clickSound.volume = 0.5;
  const deathSound = new Audio();
  deathSound.setAttribute(
    "src",
    "https://github.com/AlkolBodo/Boolean-Case-MonsterClicker-frontend/raw/main/src/assets/bouncy-sound-81173.mp3"
  );
  deathSound.volume = 0.5;

  function playClick() {
    clickSound.play();
  }
  function playDeath() {
    deathSound.play();
  }
  const [chance, setChance] = useState(0);

  // https://localhost:7249/monsters
  const [monsterData, setMonsterData] = useState([]);
  const [location, setLocation] = useState(0);
  const URL = `https://localhost:7249/monsters/stage/${location}`;
  function getData() {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setMonsterData(data.data));
  }
  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    // console.log(monsterData);
    if (monsterData.length > 0) {
      spawnMonster2();
      // console.log(currentMonster);
    }
  }, [monsterData]);

  let newMonster;
  useEffect(() => {
    console.log(URL)
    getData();
  }, [location]);

  function spawnMonster2() {
    newMonster = structuredClone(
      monsterData[Math.floor(Math.random() * monsterData.length)]
    );
    newMonster.baseHealth =
      newMonster.baseHealth +
      Math.floor(Math.random() * newMonster.extraHealth);
    newMonster.currentHP = newMonster.baseHealth;
    setTest(newMonster);
  }

  return (
    <>
      <div className="app">
        <StatisticContext.Provider
          value={{
            count: count,
            kills: kills,
            inventory: inventory,
            setInventory: setInventory,
          }}
          >
          <TempContext.Provider
            value={{
              setCount: setCount,
              setKills: setKills,
              setChance: setChance,
              playClick: playClick,
              playDeath: playDeath,
              setLocation: setLocation,
              location: location,
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
                  monsterData: monsterData,
                }}
              >
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}></Route>
                  <Route
                    path="/"
                    element={
                      <MonsterComponent
                        spawnMonster={spawnMonster2}
                        currentMonster={test}
                      />
                    }
                  />
                  <Route path="/upgrades" element={<Upgrades />} />
                  <Route
                    path="/bestiary"
                    element={<Bestiary monsters={monsterData} />}
                  />
                  <Route path="/stats" element={<Statistics />} />
                  <Route path="/bestiary/:id" element={<BestiaryPage />} />
                </Routes>
              </MonsterContext.Provider>
            </div>
          </TempContext.Provider>
        </StatisticContext.Provider>
      </div>
      <svg className="none">
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="12"
          ></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </>
  );
}

export default App;
