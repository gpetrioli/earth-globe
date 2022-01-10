import * as THREE from "three";
import { Side } from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
const adjustSize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};
adjustSize();
window.addEventListener("resize", adjustSize);
document.body.appendChild(renderer.domElement);

const earthGeometry = new THREE.SphereGeometry(20, 1024, 512);
const cloudGeometry = new THREE.SphereGeometry(20.2, 512, 256);
const earthDisplacementMap = new THREE.TextureLoader().load(
  "images/earth_displacement.png"
);
const earthSpecularMap = new THREE.TextureLoader().load(
  "images/water_specular.png"
);
const earthColorMap = new THREE.TextureLoader().load(
  "images/earth_color.jpg"
);
const cloudColorMap = new THREE.TextureLoader().load(
  "images/earth_clouds.png"
);

const earthMaterial = new THREE.MeshPhongMaterial({
  emissive: 0x060606,
  displacementMap: earthDisplacementMap,
  displacementScale: 0.1,
  specularMap: earthSpecularMap,
  map: earthColorMap,
  bumpMap: earthDisplacementMap,
  bumpScale:0.6,
  flatShading: false,
});

const cloudMaterial = new THREE.MeshLambertMaterial({
  emissive: 0x100806,
  map:cloudColorMap,
  transparent:true,
  opacity:1,
  color: 0xFFFFFF,
  side:THREE.DoubleSide,
  depthWrite: false,

});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);

const sun = new THREE.PointLight(0xffffff, 1, 0, 0);
sun.position.set(460000, 112000, 2000);
const ambient = new THREE.AmbientLight(0xFFFFFF,0.05);

var controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 23;
controls.maxDistance = 100; 
controls.enablePan = false;
controls.zoomSpeed = 0.7;
controls.rotateSpeed = 0.3;
scene.add(earth);
scene.add(clouds);
scene.add(sun);
scene.add(ambient);

camera.position.z = 20;
camera.position.y = 10;
camera.position.x = 25;
controls.update();

function animate() {
  requestAnimationFrame(animate);

  earth.rotation.y += -0.0005;
  clouds.rotation.y += -0.000499;

  controls.update();
  renderer.render(scene, camera);
}

animate();
