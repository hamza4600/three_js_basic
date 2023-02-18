// day foure in thre js 
import * as THREE from 'three';
import { creatControls } from '../system/constrols';
import { Loop } from '../system/loop';


function sphere() {
    const geometrySphere = new THREE.SphereGeometry(5, 100, 100);
    let colorSphere = new THREE.Color("rgb(25, 20, 200)");
    const materialSphere = new THREE.MeshStandardMaterial(
        {
            color: colorSphere,
        }
    );

    // cone on a sphere
    const geometryCone = new THREE.ConeGeometry(2, 5, 14);

    const materialCone = new THREE.MeshStandardMaterial(
        {
            color: "rgb(250, 20, 20)",
        }
    );
    const cone = new THREE.Mesh(geometryCone, materialCone);
    cone.position.x = 10;
    cone.position.y = 0;
    cone.position.z = 0;

    const sphere = new THREE.Mesh(geometrySphere, materialSphere);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;

    sphere.add(cone);

    sphere.tick = (delta) => {
        sphere.rotation.y += 0.01;
    }

    return sphere;
}
// IconsahedronGeometry(radius, detail)
function icosahedron() {
    const geometryIcosahedron = new THREE.IcosahedronGeometry(5, 0);
    let colorIcosahedron = new THREE.Color("rgb(25, 20, 140)");
    const materialIcosahedron = new THREE.MeshStandardMaterial(
        {
            color: colorIcosahedron,
        }
    );
    const icosahedron = new THREE.Mesh(geometryIcosahedron, materialIcosahedron);
    icosahedron.position.x = -10;
    icosahedron.position.y = 15;
    icosahedron.position.z = 0;

    // spine on icosahedron
    const geometrySpine = new THREE.CylinderGeometry(0.5, 0.5, 5, 14);

    const materialSpine = new THREE.MeshStandardMaterial({
        color: "rgb(250, 20, 200)",
    });

    const spine = new THREE.Mesh(geometrySpine, materialSpine);
    spine.position.x = 8;
    spine.position.y = 0;
    spine.position.z = 0;

    icosahedron.add(spine);

    icosahedron.tick = (delta) => {
        icosahedron.rotation.z += 0.01;
    }

    return icosahedron;
}

// usert shoould be not anle to move accross the material
function torus() {
    const geometryTorus = new THREE.TorusGeometry(5, 1, 16, 100);
    let colorTorus = new THREE.Color("rgb(25, 20, 140)");
    const materialTorus = new THREE.MeshStandardMaterial(
        {
            color: colorTorus,

        }
    );
    const torus = new THREE.Mesh(geometryTorus, materialTorus);
    torus.position.x = 0;
    torus.position.y = 15;
    torus.position.z = 0;


    torus.tick = (delta) => {
        torus.rotation.y += 0.01;
    }

    return torus;
}

// dodecahedron
function dodecahedron() {
    const geometryDodecahedron = new THREE.DodecahedronGeometry(6, 0);
    let colorDodecahedron = new THREE.Color("rgb(210, 60, 80)");
    const materialDodecahedron = new THREE.MeshStandardMaterial(
        {
            color: colorDodecahedron,
        }
    );
    const dodecahedron = new THREE.Mesh(geometryDodecahedron, materialDodecahedron);
    dodecahedron.position.x = 10;
    dodecahedron.position.y = -15;
    dodecahedron.position.z = 0;

    // spine on dodecahedron
    const geometrySpine = new THREE.CylinderGeometry(0.5, 0.5, 6, 16);
    1
    const materialSpine = new THREE.MeshStandardMaterial({
        color: "rgb(255, 30, 240)",
    });

    const spine = new THREE.Mesh(geometrySpine, materialSpine);
    spine.position.x = 2;
    spine.position.y = 6;
    spine.position.z = 0;

    spine.rotation.y = 0.5;

    dodecahedron.add(spine);

    dodecahedron.tick = (delta) => {
        dodecahedron.rotation.y += 0.01;
    }

    return dodecahedron;
}

// Creata a green plane ground 
function plane() {
    const geometryPlane = new THREE.PlaneGeometry(500, 1000, 100, 100);
    let colorPlane = new THREE.Color("rgb(0, 120, 20)");
    const materialPlane = new THREE.MeshStandardMaterial(
        {
            color: colorPlane,
        }
    );
    const plane = new THREE.Mesh(geometryPlane, materialPlane);
    plane.position.x = 0;
    plane.position.y = -20;
    plane.position.z = 0;

    plane.rotation.x = -0.5 * Math.PI;

    // box on plane
    const geometryBox = new THREE.BoxGeometry(5, 5, 5);

    const materialBox = new THREE.MeshStandardMaterial({
        color: "rgb(25, 30, 40)",
    });

    const box = new THREE.Mesh(geometryBox, materialBox);
    box.position.x = 0;
    box.position.y = 0;
    box.position.z = 0;

    // box on box
    const geometryBox2 = new THREE.BoxGeometry(3, 3, 3);

    const materialBox2 = new THREE.MeshStandardMaterial({
        color: "rgb(255, 30, 240)",
    });

    const box2 = new THREE.Mesh(geometryBox2, materialBox2);
    box2.position.x = 0;
    box2.position.y = 15;
    box2.position.z = 0;

    box.add(box2);

    plane.add(box);

    // box should jump
    plane.tick = (delta) => {
        box.position.y = 10 * Math.sin(box.position.x);
        box.position.x += 0.01;
    }

    return plane
}

// Creat Light 
function creatLight() {

    const hemislight = new THREE.HemisphereLight('white', 'darkslategrey', 8);

    return {
        hemislight
    }
}

class DayFour {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('skyblue');
        this.camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 100);
        this.renderer = new THREE.WebGLRenderer(
            {
                antialias: true,
                alpha: true
            }
        );
        this.container = document.querySelector('#app');


        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.physicallyCorrectLights = true;
        this.container.append(this.renderer.domElement);

        // controllers
        const controler = creatControls(this.camera, this.renderer);
        // Loop  for animation
        this.loop = new Loop(this.camera, this.scene, this.renderer)

        // Lights 
        const { hemislight } = creatLight();
        this.hemislight = hemislight;

        this.scene.add(this.hemislight);
        // add shapes 
        this.cone = sphere();
        this.scene.add(this.cone);
        this.loop.updatables.push(this.cone);
        this.loop.start(); // start the loop

        // add icosahedron
        this.icosahedron = icosahedron();
        this.scene.add(this.icosahedron);
        this.loop.updatables.push(this.icosahedron);
        this.loop.start(); // start the loop

        // add dodecahedron
        this.dodecahedron = dodecahedron();
        this.scene.add(this.dodecahedron);
        this.loop.updatables.push(this.dodecahedron);
        this.loop.start(); // start the loop

        // add plane
        this.plane = plane();
        this.scene.add(this.plane);
        this.loop.updatables.push(this.plane);
        this.loop.start(); // start the loop

        // add torus
        this.torus = torus();
        this.scene.add(this.torus);
        this.loop.updatables.push(this.torus);
        this.loop.start(); // start the loop
 
        this.renderer.render(this.scene, this.camera);

    }
}
// Loading new Assists in app 
export default DayFour;