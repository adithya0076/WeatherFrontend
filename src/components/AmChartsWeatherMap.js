import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
    const mapRef = useRef(null);
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[7.926252474659472, 80.62546784024994]} zoom={8} ref={mapRef} style={{height: "90vh", width: "50vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
  };
  
  export default SimpleMap;
  