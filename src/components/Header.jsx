import React from 'react'
import { useState, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/Header.css";
import { StatisticContext } from "../App";




function Header() {
  const { inventory } = useContext(StatisticContext);
  return (
    <header className='header'>Header
    <p>Gold: {inventory.gold} </p>
    <Routes>
                  <Route
                    path="/"
                    element={
                      " Home"
                    }
                  />
                  <Route path="/upgrades" element={ " Upgrades"} />
                  <Route path="/bestiary" element={" Bestiary"} />
                  <Route path="/stats" element={" Stats"} />
                </Routes>
    </header>
  )
}

export default Header