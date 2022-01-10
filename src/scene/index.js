import * as THREE from "three";
import { earth } from "../objects/earth";
import { clouds } from "../objects/clouds";
import { sun, ambient } from "../lights";

import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper.js";

const scene = new THREE.Scene();

earth.receiveShadow = true;
// earth.castShadow = true;
// clouds.castShadow = true;
// clouds.receiveShadow = true;

scene.add(earth);
scene.add(clouds);
scene.add(sun);
scene.add(ambient);

// const helper = new THREE.AxesHelper(25);
// scene.add(helper);
export { scene, earth, clouds, sun, ambient };
