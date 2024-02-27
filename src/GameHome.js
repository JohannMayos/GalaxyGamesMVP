// Home.js

import React from 'react';
import GameCard from './GameCard'; // Importe o componente GameCard
import './GameHome.css';

const games = [
  {
    id: 1,
    title: 'Red Dead Redemption 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Grand Theft Auto V',
    image: 'https://via.placeholder.com/150',
  },
  // Adicione mais jogos conforme necessário
];

const Home = () => {
  return (
    <div className="game-home">
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar jogos" />
        <button>Buscar</button>
      </div>
      <h2>Promoções Imperdíveis</h2>
      <div className="game-list">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
