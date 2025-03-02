import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCQ5iR8e22NZmgC5TSz3fdJsqZo2-Vhdf4&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.initMap = function () {
          const map = new window.google.maps.Map(
            document.getElementById("map"),
            {
              center: { lat: 39.18145, lng: -77.2717 }, // Coordinates for 13048 Middlebrook Rd, Germantown, MD 20874
              zoom: 15,
            }
          );

          new window.google.maps.Marker({
            position: { lat: 39.18145, lng: -77.2717 },
            map,
            title: "Woodside Deli",
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            },
          });
        };
      };

      script.onerror = () => {
        console.error("Google Maps API failed to load.");
      };
    };

    if (!window.google) {
      loadScript();
    } else {
      window.initMap();
    }

    return () => {
      if (window.google) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <div
      id="map"
      className="w-full h-full"
      style={{ height: "400px", width: "100%" }}
    ></div>
  );
};

export default Map;
