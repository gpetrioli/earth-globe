import * as THREE from "three";

const sun = new THREE.PointLight(0xffffff, 1, 0);
sun.position.set(460, 112, 20);
sun.castShadow = true;
sun.shadow.mapSize.width = 2048; // default
sun.shadow.mapSize.height = 2048; // default
sun.shadow.camera.near = 0; // default
sun.shadow.camera.far = 2000; // default
sun.shadow.radius = 8;

const ambient = new THREE.AmbientLight(0xffffff, 0.05);

export { sun, ambient };
