import { useState, useEffect } from 'react';
const useLocation = (address = null) => {
  const [state, setLocation] = useState([]);  
  // const ADDRESS = 'Bogota 7505 Chihuahua Chihuahua 31210';
  const BASE_API =
    'http://api.positionstack.com/v1/forward?access_key=117b684477d66a265a11d9ed043ddc95&query=';
  useEffect(() => {
    fetch(BASE_API + address)
      .then((response) => response.json())
      .then((data) => {
        setLocation({
          ...state,
          latitude: data.data[0].latitude,
          longitude: data.data[0].longitude,
        });
      }).catch(error =>  console.log('error' + error));
  }, []);
  return {
    location: [ state.latitude , state.longitude],
  };
};

export default useLocation;
