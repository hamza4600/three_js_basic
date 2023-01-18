import { PerspectiveCamera } from 'three';


function creatCamera() {
    const fov = 100; // field of view in degrees
    const aspect = window.innerWidth / window.innerHeight;  // the canvas default size
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(1, 2, 25); // set the camera position together
    camera.fov = 100; // set the field of view
    return camera;
}

export { creatCamera }; 