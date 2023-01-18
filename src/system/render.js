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

// Anti-aliasing is performed using the built-in WebGL method of multisampling. This is a technique that uses multiple samples per pixel to determine the final color of that pixel. The more samples, the smoother the edges of objects will appear. However, this comes at a cost of performance. The default value is false.
