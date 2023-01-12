import { WebGLRenderer } from "three";

function creatRenderer() {
    const renderer = new WebGLRenderer(
        {
            antialias: true, // to get smoother output
            alpha: true, // to allow the background color to show through
        }
    );
    renderer.physicallyCorrectLights = true; // enable physically correct lighting, i.e., lights are not affected by the applied transforms

    return renderer;
}

export { creatRenderer };