import * as THREE from "three";

const textures = {
  color: "images/earth_clouds.png",
};

const geometry = new THREE.SphereGeometry(20.5, 512, 256);
const colorMap = new THREE.TextureLoader().load(textures.color);

const material = new THREE.MeshLambertMaterial({
  emissive: 0x100806,
  map: colorMap,
  transparent: true,
  opacity: 1,
  color: 0xffffff,
  side: THREE.DoubleSide,
  depthWrite: false,
});
const clouds = new THREE.Mesh(geometry, material);

export { clouds };
