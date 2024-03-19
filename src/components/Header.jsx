import React from 'react'
import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/Header.css";


function Header() {
  return (
    <header className='header'>Header
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