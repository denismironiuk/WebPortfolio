import React, { useEffect } from "react";
import L, { marker } from "leaflet";

function MyMap() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function () {
       
        const coords = [32.828287, 34.9789586]; //32.828287,34.9789586

        const map = L.map("map").setView(coords, 26);
        

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

    

        var marker=L.marker(coords).addTo(map).bindPopup("Haifa Hazait 20").openPopup();
        marker.setZIndexOffset(-99)
        
      },
      function () {
        alert("could not get");
      }
    );
  }, [marker]);

  return (
    
      
        <div  id="map" className="leaflet-container z-0 " ></div>
      
    
  );
}
export default MyMap;
