import React from "react";
import {useEffect , useState} from "react";

const Location = () => {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            setPosition({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          });
        } 
      }, []);
    
        const latitude = position.latitude;
        const longitude = position.longitude;
    
        console.log(latitude);
        console.log(longitude);
}
