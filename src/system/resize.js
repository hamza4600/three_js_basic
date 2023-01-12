class Resizer {
    constructor(container, camera, renderer) {
        camera.aspect = container.clientWidth / container.clientHeight; // set the aspect ratio to match the new browser window aspect ratio
        camera.updateProjectionMatrix();  // update the camera's frustum
        renderer.setSize(container.clientWidth, container.clientHeight); // set the size of the canvas
        renderer.setPixelRatio(window.devicePixelRatio);  // pixel ratio for high resolution displays
    }
}

export { Resizer };