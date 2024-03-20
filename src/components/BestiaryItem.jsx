import React from "react";
import { useNavigate } from "react-router-dom";

function BestiaryItem({ monster }) {
  const navigate = useNavigate();
  return (
    <li className="content" onClick={() => {navigate(`/bestiary/${monster.id}`);}}>
      <p>{monster.monsterName}</p>
      <div className="picture">
        <img
          src={[monster.monsterSpriteUrl]}
          alt={monster.monsterName}
          width="100%"
          height="100%"
        />
      </div>
    </li>
  );
}

export default BestiaryItem;
