
import React from 'react';

const BootstrapExample = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Exemple de composants Bootstrap</h2>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1565024144485-d3256c7e20b4?auto=format&fit=crop&w=500&q=80" className="card-img-top" alt="Kaaba" />
            <div className="card-body">
              <h5 className="card-title">Package Hajj Économique</h5>
              <p className="card-text">Notre forfait Hajj économique offre une expérience complète avec un hébergement confortable à distance de marche du Haram.</p>
              <a href="#" className="btn btn-success">En savoir plus</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=500&q=80" className="card-img-top" alt="Medina" />
            <div className="card-body">
              <h5 className="card-title">Package Hajj Standard</h5>
              <p className="card-text">Notre forfait Hajj standard comprend des hôtels de qualité supérieure et un service personnalisé pendant votre séjour.</p>
              <a href="#" className="btn btn-success">En savoir plus</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=500&q=80" className="card-img-top" alt="Mecca" />
            <div className="card-body">
              <h5 className="card-title">Package Hajj Premium</h5>
              <p className="card-text">Notre forfait Hajj premium offre une expérience luxueuse avec des hôtels 5 étoiles et un service VIP personnalisé.</p>
              <a href="#" className="btn btn-success">En savoir plus</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-5">
        <h3>Exemple de composants Bootstrap</h3>
        <div className="d-flex gap-2 my-3">
          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-secondary">Secondary</button>
          <button type="button" className="btn btn-success">Success</button>
          <button type="button" className="btn btn-danger">Danger</button>
          <button type="button" className="btn btn-warning">Warning</button>
          <button type="button" className="btn btn-info">Info</button>
        </div>
        
        <div className="alert alert-success mt-3" role="alert">
          Réservez votre voyage Hajj ou Umrah dès maintenant et bénéficiez d'une réduction de 10% !
        </div>
      </div>
    </div>
  );
};

export default BootstrapExample;
