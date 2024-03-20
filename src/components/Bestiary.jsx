import React from "react";
import { useState, createContext, useEffect } from "react";
import "../styles/Bestiary.css";

import BestiaryItem from "./BestiaryItem";

function Beastiary({ monsters }) {
  const [beastiaryData, setBeastiaryData] = useState([]);
  const [page, setPage] = useState(1);
  const URL = "https://localhost:7249/monsters/bestiary/15/";
  useEffect(() => {
    fetch(`${URL}${(page - 1) * 15}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setBeastiaryData(data.data));
  }, [page]);
  return (
    <div className="bestiary">
      <ul className="mlist">
        {beastiaryData.map((m, index) => (
          <BestiaryItem key={index} monster={m} />
        ))}
      </ul>
      <div className="pagination">
        <a
          href="#"
          onClick={() => {
            setPage(page === 1 ? 1 : page - 1);
          }}
        >
          &laquo;
        </a>
        <a className="active" href="#">
          {page}
        </a>
        <a
          href="#"
          onClick={() => {
            setPage(page === 2 ? 2 : page + 1);
          }}
        >
          &raquo;
        </a>
      </div>
    </div>
  );
}

export default Beastiary;
