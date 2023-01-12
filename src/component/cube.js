import * as THREE from 'three'

function creatCube() {
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.MeshStandardMaterial({ color: 'purple' });
    const cube = new THREE.Mesh(geometry, material)

    cube.rotation.set(-0.9, -0.1, 0.8)

    return cube
}

export { creatCube }