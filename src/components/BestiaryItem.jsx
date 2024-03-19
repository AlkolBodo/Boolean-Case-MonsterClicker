import React from "react";

function BestiaryItem({ monster }) {
  return (
    <li className="content">
      <p>{monster.name}</p>
      <div className="picture">
        <img
          src={[monster.sprite]}
          alt="Mystery Bread"
          width="100%"
          height="100%"
        />
      </div>
    </li>
  );
}

export default BestiaryItem;
