// GameCard.js

import React from 'react';


const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <div className="game-details">
        <h2>{game.title}</h2>
        <button>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default GameCard;
