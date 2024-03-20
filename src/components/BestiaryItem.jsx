import React from "react";

function BestiaryItem({ monster }) {
  console.log(monster)
  return (
    <li className="content">
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
