import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import '../styles/components/Map.css';
import useLocation from '../hooks/useLocation';

function Success() {
  const {
    state: { buyer },
  } = useContext(AppContext);
  // const {location} = useLocation(buyer.complete_address);
  // console.log(location);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="leaflet-container ">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Success;
