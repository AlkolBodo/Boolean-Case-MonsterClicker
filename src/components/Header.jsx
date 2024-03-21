import React from "react";
import { useState, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/Header.css";
import { StatisticContext } from "../App";
import { useNavigate } from "react-router-dom";

function Header({setUserId}) {
  const { inventory } = useContext(StatisticContext);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token') !== null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    setUserId(null)
    navigate('/login')
  }

  return (
    <header className="header">
      Header
      <Routes>
        <Route path="/" element={" Home"} />
        <Route path="/upgrades" element={" Upgrades"} />
        <Route path="/bestiary" element={" Bestiary"} />
        <Route path="/bestiary/:id" element={" Bestiary"} />
        <Route path="/stats" element={" Stats"} />
      </Routes>
      {isLoggedIn && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
      <p>
        {Object.keys(inventory).map((key) => (
          inventory[key] ? `${key}: ${inventory[key]} ` : ""
        ))}
      </p>
      {/* {inventory.gold ? <p>Gold: {inventory.gold} </p> : ""} */}
    </header>
  );
}

export default Header;
