import React, { useContext } from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
export const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product, index) => {
    removeFromCart(product, index);
  };

  const handleSumTotal = (cart) => {
    let totalSum = cart.reduce((acc,crr) => acc + crr.price,0);
    return totalSum;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de pedidos:</h3>
        ) : (
          <h3>Agregar productos al carrito 🙄 </h3>
        )}
        {cart.length > 0 &&
          cart.map((product, index) => (
            <div key={index} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{product.title}</h4>
                <span>${product.price}</span>
              </div>
              <button
                type="button"
                onClick={() => handleRemove(product, index)}
              >
                <i className="fas fa-trash-alt" title="Eliminar" />
              </button>
            </div>
          ))}
        <div />
      </div>
      <div className="Checkout-sidebar">
        {cart.length > 0 ? (
          <h3>
            {`Precio total: ${handleSumTotal(cart)}`}
          </h3>
        ) : (
          <h3>No hay productos en el carrito 🤦 </h3>
        )}
        <button type="button">
          <Link to="/checkout/information">Continuar con el pago</Link>
        </button>
      </div>
    </div>
  );
};
