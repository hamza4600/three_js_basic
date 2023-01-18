
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// It is a function that creates a control object
// addEventListener => used to listen to events in the browser
// OrbitControls => used to control the camera
// OrbitControls(camera, renderer.domElement) => used to control the camera
// enableDamping => used to enable damping

// By defalut it is set 
// controls.target.set(0, 5, 0); // set the target of the camera
// controls.update(); // update the camera
// can also change 
// controls.target.copy(mesh.position); // set the target of the camera


function creatControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.autoRotate = true;  // auto-rotate the camera
    controls.autoRotateSpeed = 0.5;  // auto-rotate speed
    // controls.target.set(0, 500, 100); // set the target of the camera
    // controls.addEventListener('change', renderer); // listen to the change event
    controls.tiltSpeed = 0.5; // tilt speed
    controls.panSpeed = 0.5; // pan speed
    controls.zoomSpeed = 0.5; // zoom speed

    // Update Camera Position
    camera.position.set(0, 0, 30); // set the camera position
    camera.rotation.set(0, 0, 0); // set the camera rotation
    controls.update(); // update the camera
    // controls.enabled = false; // enable the controls or disable them
    controls.saveState(); // save the state of the controls
    controls.reset(); // reset the controls
    controls.maxPolarAngle = Math.PI / 2; // set the maximum polar angle
    controls.minPolarAngle = 0; // set the minimum polar angle
    controls.maxAzimuthAngle = Math.PI / 2; // set the maximum azimuth angle

    // controls.dispose(); // dispose the controls


    controls.tick = () => controls.update(); // add a tick method to the controls so that it can be called in the render loop

    return controls
}

export { creatControls }