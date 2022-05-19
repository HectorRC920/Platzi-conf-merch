import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useLocation from '../hooks/useLocation';
import '../styles/components/Map.css';
import AppContext from '../context/AppContext';

// const position = [28.650588, -106.117706];

const Map = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const [state, setLocation] = useState([]);
  // const ADDRESS = 'Bogota 7505 Chihuahua Chihuahua 31210';
  const BASE_API =
    'http://api.positionstack.com/v1/forward?access_key=117b684477d66a265a11d9ed043ddc95&query=';
  useEffect(() => {
    fetch(BASE_API + buyer.complete_address)
      .then((response) => response.json())
      .then((data) => {
        setLocation({
          ...state,
          latitude: data.data[0].latitude,
          longitude: data.data[0].longitude,
        });
      })
      .catch((error) => console.log('error' + error));
  }, []);
  return (
    <>
      {state.latitude && state.longitude && (
        <MapContainer center={[state.latitude,state.longitude]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[state.latitude,state.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};
export default Map;
