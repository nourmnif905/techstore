import React from 'react';
import '../styles/herosection.css';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-text">
      <h2>Les Meilleures Offres Tech</h2>
      <p>Découvrez notre sélection d'électroniques et technologies de pointe</p>
      <button>Voir les promotions</button>
    </div>
    <div className="hero-image-wrapper">
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-office-essentials-technology-and-gadgets-illustration-featuring-laptop-printer-camera-tablet-image_3748458.jpg"
        alt="Promo"
      />
    </div>
  </section>
);

export default HeroSection;
