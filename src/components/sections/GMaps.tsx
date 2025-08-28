// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const LiveLocation = () => {
//     const [location, setLocation] = useState({ lat: 28.6139, lng: 77.2090 }); // default Delhi
// //   const [watchId, setWatchId] = useState(null);
//     const [watchId, setWatchId] = useState<number | null>(null);

//   // Start watching location
//   const trackLocation = () => {
//     if (navigator.geolocation) {
//       const id = navigator.geolocation.watchPosition(
//         (position) => {
//           setLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//         },
//         { enableHighAccuracy: true }
//       );
//       setWatchId(id);
//     } else {
//       alert("Geolocation not supported by this browser.");
//     }
//   };

//   // Stop watching
//   const stopTracking = () => {
//     if (watchId) {
//       navigator.geolocation.clearWatch(watchId);
//       setWatchId(null);
//     }
//   };

//   return (
//     <div className="p-4">
//       <button
//         onClick={trackLocation}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//       >
//         Start Live Tracking
//       </button>
//       <button
//         onClick={stopTracking}
//         className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg"
//       >
//         Stop Tracking
//       </button>

//       <div className="mt-4">
//         <LoadScript googleMapsApiKey="AIzaSyBToEOs4jFNTl_DSDUGqUcUFTFKdDPThAE">
//           <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
//             <Marker position={location} />
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     </div>
//   );
// };

// export default LiveLocation;

import React, { useState, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const LiveLocation = () => {
  const [location, setLocation] = useState({ lat: 28.6139, lng: 77.2090 }); // default Delhi
  const watchIdRef = useRef<number | null>(null);

  // ✅ Load Google Maps API safely
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBToEOs4jFNTl_DSDUGqUcUFTFKdDPThAE", // replace with your actual API key
  });

  const trackLocation = () => {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        { enableHighAccuracy: true }
      );
      watchIdRef.current = id;
    } else {
      alert("Geolocation not supported by this browser.");
    }
  };

  const stopTracking = () => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  };

  // ⏳ Wait until maps API is ready
  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div className="p-4">
      <button
        onClick={trackLocation}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Start Live Tracking
      </button>
      <button
        onClick={stopTracking}
        className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Stop Tracking
      </button>

      <div className="mt-4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={15}
        >
          <Marker
            position={location}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              scaledSize: new window.google.maps.Size(40, 40), // ✅ Safe now
            }}
          />
        </GoogleMap>
      </div>
    </div>
  );
};

export default LiveLocation;
