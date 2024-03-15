import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MonsterComponent from "./components/MonsterComponent";
export const TempContext = createContext();


function App() {
  const [count, setCount] = useState(0);
  const [kills, setKills] = useState(0);

  const [chance, setChance] = useState(0);

  // useEffect(()=>{
  //   console.log("CHANCE",chance)
  // },[chance])

  return (
    <>
      <TempContext.Provider value={{setCount: setCount, setKills: setKills, setChance: setChance}}>
        <h1>{chance > 8 ? "CUCK" : "CLICK"} HIM</h1>
        <div className="card">
          <Routes>
            <Route path="/" element={<MonsterComponent />} />
          </Routes>
          <button>count is {count}</button>
          <button>kills are {kills}</button>
        </div>
      </TempContext.Provider>
    </>
  );
}

export default App;
