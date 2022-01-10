import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function (camera, element) {
  var controls = new OrbitControls(camera, element);
  controls.minDistance = 23;
  controls.maxDistance = 100;
  controls.enablePan = false;
  controls.zoomSpeed = 0.7;
  controls.rotateSpeed = 0.3;

  return controls;
}
