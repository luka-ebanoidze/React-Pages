import React from "react";
import './UserCard.css'

export const UserCard = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card_info">
        <h2>{title}</h2>
      </div>
      <div className="card_image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};


