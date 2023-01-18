import { BoxGeometry, ConeGeometry, EdgesGeometry, Mesh, MeshStandardMaterial } from "three";


// function creatPower(x, y, width, height, color) { const power = { x, y, width, height, color }; return power }

function creatPower() {
    // const geometry = new BoxGeometry(2, 2, 20);
    const geometry = new EdgesGeometry(new ConeGeometry(2, 20, 3));
    // other material
    const material = new MeshStandardMaterial({
        color: 'gold',
        // wireframe: true,
        // transparent: true,
        opacity: 0.5,
    });
    const power = new Mesh(geometry, material)

    power.rotation.set(-0.9, -0.1, 0.8)
    // animate(); // call the animate function
    power.tick = (delta) => {
        power.rotation.y += 0.01;
        power.rotation.z += 0.01;

    }

    return power
}

export { creatPower }