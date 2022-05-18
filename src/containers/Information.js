import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';
const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);

  const handleSumTotal = (cart) => {
    let totalSum = cart.reduce((acc, crr) => acc + crr.price, 0);
    return totalSum;
  };
  
  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      'name' : formData.get('name') ,
      'email' : formData.get('email') ,
      'address' : formData.get('address'),
      'apto' : formData.get('apto'),
      'city' : formData.get('city'),
      'country' : formData.get('country'),
      'state' : formData.get('state'),
      'cp' : formData.get('cp'),
      'phone' : formData.get('phone'),
    }
    addToBuyer(buyer)
  }
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index} className="Information-item">
              <div className="Information-element">
                <h4>{product.title}</h4>
                <span>{product.price}</span>
              </div>
            </div>
          ))
        ) : (
          <h3>No hay productos en el carrito 🤦 </h3>
        )}
        <div className='Information-total'>
          {cart.length > 0 ? (
            <h3>{`Total: ${handleSumTotal(cart)}`}</h3>
          ) : <></> }
        </div>
      </div>
    </div>
  );
};

export default Information;
