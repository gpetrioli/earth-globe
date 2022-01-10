import * as THREE from "three";

const textures = {
  displacement: "images/earth_displacement.png",
  specular: "images/water_specular.png",
  color: "images/earth_color.jpg",
};

const geometry = new THREE.SphereGeometry(20, 1024, 512);
const displacementMap = new THREE.TextureLoader().load(textures.displacement);
const specularMap = new THREE.TextureLoader().load(textures.specular);
const colorMap = new THREE.TextureLoader().load(textures.color);

const material = new THREE.MeshPhongMaterial({
  emissive: 0x060606,
  displacementMap: displacementMap,
  displacementScale: 0.9,
  specularMap: specularMap,
  map: colorMap,
  bumpMap: displacementMap,
  bumpScale: 0.2,
  flatShading: false,
});

const earth = new THREE.Mesh(geometry, material);

export { earth };
