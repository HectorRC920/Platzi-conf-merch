import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Payment.css';

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        <div className="Payment-button">
          <Link to="/checkout/success">
            Boton de pago con Paypal
          </Link>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;