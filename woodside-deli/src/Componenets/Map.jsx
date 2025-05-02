import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const initMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 39.18145, lng: -77.2717 }, // Coordinates for 13048 Middlebrook Rd, Germantown, MD 20874
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat: 39.18145, lng: -77.2717 },
          map,
          title: "Woodside Deli",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          },
        });
      }
    };

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.google && window.google.maps) {
          window.initMap = initMap;
          window.initMap();
        }
      };

      script.onerror = () => {
        console.error("Google Maps API failed to load.");
      };
    };

    if (!window.google || !window.google.maps) {
      loadScript();
    } else {
      initMap();
    }

    return () => {
      if (window.google && window.google.maps) {
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
