import React from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
export const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i className="fas fa-trash-alt" title="Eliminar" />
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: 10</h3>
        <button type="button">
          <Link to="/checkout/information">Continuar con el pago</Link>
        </button>
      </div>
    </div>
  );
};
