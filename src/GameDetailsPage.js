// GameDetailsPage.js

import React from 'react';
import GameDetails from './GameDetails';

const GameDetailsPage = () => {
  // Simulando detalhes do jogo - você pode obter esses dados de uma fonte externa
  const game = {
    title: 'Red Dead Redemption 2',
    image: 'https://via.placeholder.com/150',
    description: 'Descrição do jogo Red Dead Redemption 2',
  };

  return (
    <div className="game-details-page">
      <h1>Detalhes do Jogo</h1>
      <GameDetails 
        title={game.title} 
        image={game.image} 
        description={game.description} 
      />
    </div>
  );
};

export default GameDetailsPage;
