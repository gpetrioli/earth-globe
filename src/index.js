import * as THREE from "three";
import controller from "./controls";
import { camera } from "./camera";
import { scene, earth, clouds } from "./scene";

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

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

const controls = controller(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  earth.rotation.y += -0.001;
  clouds.rotation.y += -0.0008;

  controls.update();

  renderer.render(scene, camera);
}

animate();
