import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      {/* Barra de navegação */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="navLinks">
          <li className="navLink">
            <Link to='/login'>Login</Link>
          </li>
          <li className="navLink"><Link to='/signup'>Cadastre-se</Link></li>
        </ul>
      </nav>
      
      {/* Carrossel */}
      <div className="carouselContainer">
        {/* Aqui você pode adicionar o seu componente de carrossel */}
        <h2>Galaxy Games</h2>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Galaxy Games. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};


export default HomePage;
