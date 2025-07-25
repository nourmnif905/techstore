import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Présentation TechStore */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-white">TechStore</h5>
            <p className="text-white small">
              Votre destination technologique en Tunisie. Les meilleurs produits électroniques aux meilleurs prix.
            </p>
            <div className="d-flex gap-3">
              <a href="#"><i className="fab fa-facebook-f text-white"></i></a>
              <a href="#"><i className="fab fa-instagram text-white"></i></a>
              <a href="#"><i className="fab fa-twitter text-white"></i></a>
              <a href="#"><i className="fab fa-youtube text-white"></i></a>
            </div>
          </div>

          {/* Colonne 2 : Service Client */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-white">Service Client</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white text-decoration-none">Aide & Support</a></li>
              <li><a href="#" className="text-white text-decoration-none">Suivi de commande</a></li>
              <li><a href="#" className="text-white text-decoration-none">Retours & Échanges</a></li>
              <li><a href="#" className="text-white text-decoration-none">Garantie</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Liens Rapides */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-white">Liens Rapides</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white text-decoration-none">À propos</a></li>
              <li><a href="#" className="text-white text-decoration-none">Nos magasins</a></li>
              <li><a href="#" className="text-white text-decoration-none">Carrières</a></li>
              <li><a href="#" className="text-white text-decoration-none">Conditions</a></li>
              <li><a href="#" className="text-white text-decoration-none">Confidentialité</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Newsletter */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-white">Newsletter</h6>
            <p className="text-white small">Recevez nos dernières offres et nouveautés</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2 bg-secondary border-0 text-white"
                placeholder="Votre email"
              />
              <button className="btn btn-primary" type="submit">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="pt-4 mt-4 border-top border-secondary small text-center">
  <span>© 2024 TechStore. Tous droits réservés.</span>
</div>

      </div>
    </footer>
  );
};

export default Footer;
