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
            navigate("/home");
          }}
        >
          <div className={`parchment ${currentTab === "home" ? "active" : ""}`}></div>
          <div className="menu--item">
            <span className="label">Home</span>
          </div>
        </li>
        <li
          className={`item ${currentTab === "upgrades" ? "active" : ""}`}
          onClick={() => {
            setCurrentTab("upgrades");
            navigate("/upgrades");
          }}
        >
          <div className={`parchment ${currentTab === "upgrades" ? "active" : ""}`}></div>
          <div className="menu--item">
            <span className="label">Upgrades</span>
          </div>
        </li>
        <li
          className={`item ${currentTab === "bestiary" ? "active" : ""}`}
          onClick={() => {
            setCurrentTab("bestiary");
            navigate("/bestiary");
          }}
        >
          <div className={`parchment ${currentTab === "bestiary" ? "active" : ""}`}></div>
          <div className="menu--item">
            <span className="label">Bestiary</span>
          </div>
        </li>
        <li
          className={`item ${currentTab === "stats" ? "active" : ""}`}
          onClick={() => {
            setCurrentTab("stats");
            navigate("/stats");
          }}
        >
          <div className={`parchment ${currentTab === "stats" ? "active" : ""}`}></div>
          <div className="menu--item">
            <span className="label">Statistics</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default LeftMenu;
