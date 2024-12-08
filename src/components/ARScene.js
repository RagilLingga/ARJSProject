import React from "react";
import "aframe";
import "aframe-ar";

const ARScene = () => {
  return (
    <a-scene embedded
    arjs="sourceType: webcam;"
    onLoaded={() => console.log('AR.js scene loaded')}
    onError={(err) => console.error('Error loading AR.js scene', err)}>
      {/* Marker dengan logo marker.patt */}
      <a-marker type="pattern" url="markerlogo.patt">
        {/* Model Mikrotik */}
        <a-entity
          gltf-model="mikrotik.glb"
          scale="0.5 0.5 0.5"
          position="0 0.5 0"
        ></a-entity>
      </a-marker>

      {/* Kamera AR */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
