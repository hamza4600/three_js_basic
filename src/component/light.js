import { DirectionalLight ,AmbientLight , HemisphereLight , PointLight , SpotLight , RectAreaLight} from 'three';

function creatLight() {
    const light = new DirectionalLight('gold', 10); // used to simulate the sun light
    // Other Types of Light 
    // AmbientLight( color, intensity ) 
    // const light = new AmbientLight('white', 10);
    // HemisphereLight( skyColor, groundColor, intensity ) // used to simulate the sky color and the ground color
    // const light = new HemisphereLight('gold', 'darkslategrey', 8);
    // PointLight( color, intensity, distance, decay ) // used to simulate the light bulb
    // const light = new PointLight('white', 10, 100, 20); 
    // SpotLight( color, intensity, distance, angle, penumbra, decay ) // used to simulate the spotlight
    //  const light = new SpotLight('gold', 10, 100, Math.PI * 0.1, 0.25, 2);
    // RectAreaLight( color, intensity, width, height ) // used to simulate the strip lighting or bright windows
    // const light = new RectAreaLight('gold', 100, 100, 100);
    light.position.set(0, 10, 0);
    return light;
}

export { creatLight };