import React from 'react';
import './GameDetails.css';

const platforms = [
  { name: 'Steam', price: 49.99 },
  { name: 'Epic Games Store', price: 47.99 },
  { name: 'PlayStation Store', price: 59.99 },
  { name: 'Xbox Store', price: 54.99 },
  { name: 'Nintendo eShop', price: 49.99 },
];

const GameDetails = ({ title, image, description }) => {
  return (
    <div className="game-details">
      <div className="game-info">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
      <div className="platforms">
        <h3>Preços nas Plataformas Digitais</h3>
        <ul>
          {platforms.map(platform => (
            <li key={platform.name}>
              <span>{platform.name}</span>
              <span>R${platform.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameDetails;
