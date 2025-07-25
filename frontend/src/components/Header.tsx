import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <span>📞 +216 XX XXX XXX</span>
        <span>📧 contact@techstore.tn</span>
      </div>
      <div className="main-header">
        <h1 className="logo">TechStore<span>.tn</span></h1>
        <input type="text" placeholder="Rechercher des produits..." />
        <div className="actions">
          <Link to="/panier">🛒 Panier</Link>
        </div>
      </div>
      <nav className="nav-bar">
        <a href="#">Ordinateurs</a>
        <a href="#">Smartphones</a>
        <a href="#">Tablettes</a>
        <a href="#">Gaming</a>
        <a href="#">Audio</a>
        <a href="#">Photo & Vidéo</a>
        <a href="#">Composants PC</a>
      </nav>
    </header>
  );
};

export default Header;
