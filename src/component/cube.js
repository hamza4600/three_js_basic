import * as THREE from 'three'
import { MathUtils } from 'three';


function creatMaterial() {
    const textureloading = new THREE.TextureLoader();

    const texture = textureloading.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg');

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
        color: 'purple',
    });
    return material
}



function creatCube() {
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.MeshStandardMaterial({ color: 'purple' });
    // const material = creatMaterial();  // use the material from creatMaterial
    const cube = new THREE.Mesh(geometry, material)

    cube.rotation.set(-0.9, -0.1, 0.8)

    // const radiansPerSecond = Math.PI / 2;
    const radiansPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        cube.rotation.z += radiansPerSecond * delta;
    }


    return cube
}

export { creatCube }