import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateContext } from "../App";

function LeftMenu() {
  const { currentTab, setCurrentTab } = useContext(NavigateContext);
  const navigate = useNavigate();
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === "home" ? "active" : ""}`}
          onClick={() => {
            setCurrentTab("home");
            navigate("/");
          }}
        >
          <div className="menu--item">
            <span className="label">Home</span>
          </div>
        </li>
        <li
          className={`item ${currentTab === "profile" ? "active" : ""}`}
          onClick={() => {
            setCurrentTab("profile");
            navigate("/beastiary");
          }}
        >
          <div className="menu--item">
            <span className="label">Beastiary</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default LeftMenu;
