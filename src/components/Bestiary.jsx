import { useState, useEffect } from "react";
import "../styles/Bestiary.css";

import BestiaryItem from "./BestiaryItem";

function Beastiary() {
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

  if (beastiaryData.length < 1) {
    return (
      <div className="bestiary">
        <img
        className="book"
        src="https://i.pinimg.com/originals/e1/9c/47/e19c47506e1901acaf2de89de4f2edc5.png"
        alt="test"
        width="100%"
        height="100%"
      />
        <h1>Loading Bestiary...</h1>
      </div>
    );
  }
  return (
    <div className="bestiary">
      <img
        className="book"
        src="https://i.pinimg.com/originals/e1/9c/47/e19c47506e1901acaf2de89de4f2edc5.png"
        alt="test"
        width="100%"
        height="100%"
      />
      <ul className="mlist">
        {beastiaryData.map((m, index) => (
          <BestiaryItem key={index} monster={m}/>
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
        <a className="active">{page}</a>
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
