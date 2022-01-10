import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 30;
camera.position.y = 30;
camera.position.x = 30;

export { camera };
