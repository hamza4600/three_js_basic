
// Triana is a triangle component
import * as THREE from 'three'
import { CylinderGeometry } from 'three';

function creatTriangle() {

    // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength)

    const geometry = new THREE.CylinderGeometry(0, 10, 30, 4, 1);
    const material = new THREE.MeshStandardMaterial({ color: 'gold' });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.tick = (delta) => {
        mesh.rotation.y += 0.01;
    }
    return mesh
}

export { creatTriangle }