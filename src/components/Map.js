import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Map = () => {
    const  mapStyles ={
        height: "50vh",
        width: "100%"

    }
    const defaultCenter = {
        lat: 20,
        lng: -99
    }
  return (
      <LoadScript googleMapsApiKey='AIzaSyBrs5AguWdW0otPdqd0PdH-Jg6PHx8jB-g'>
          <GoogleMap 
          MapStyle={mapStyles}
          zoom={0}
          center={defaultCenter}>
              <Marker position={defaultCenter}/>
          </GoogleMap>
      </LoadScript>
  )
};

export default Map;
