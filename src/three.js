
import * as THREE from 'three';
import { creatControls } from './system/constrols';
import { Resizer } from './system/resize';
import { Loop } from './system/loop';
import { MathUtils } from 'three';
// Creat a Cals That will append to the DOM

// SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
function sphere() {
    const geometrySphere = new THREE.SphereGeometry(5, 10, 10);
    let colorSphere = new THREE.Color("rgb(25, 20, 100)");
    const materialSphere = new THREE.MeshStandardMaterial(
        {
            color: colorSphere,
        }
    );
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    return sphere;
}

// Plane in the XZ plane
function plane() {
    const geometryPlane = new THREE.PlaneGeometry(1000, 1000);
    let colorPlane = new THREE.Color("rgb(25, 200, 100)");
    const materialPlane = new THREE.MeshStandardMaterial(
        {
            color: colorPlane,
        }
    );
    const plane = new THREE.Mesh(geometryPlane, materialPlane);
    plane.position.x = 0;
    plane.position.y = -10;
    plane.position.z = 0;
    plane.rotation.x = -0.5 * Math.PI;
    return plane;
}

// BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)

function box() {
    const geometryBox = new THREE.BoxGeometry(10, 10, 10);
    let colorBox = new THREE.Color("rgb(250, 12, 1000)");
    const materialBox = new THREE.MeshStandardMaterial(
        {
            color: colorBox,
        }
    );
    const box = new THREE.Mesh(geometryBox, materialBox);
    box.position.x = -15;
    box.position.y = 5;
    box.position.z = 0;
    return box;
}


function cone() {
    const geometry = new THREE.CylinderGeometry(0, 10, 30, 4, 1);
    const material = new THREE.MeshStandardMaterial({ color: 'gold' });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.tick = (delta) => {
        mesh.rotation.y += 0.01;
    }

    return mesh;
}

// Creat Light 
function creatLight() {
    const ambientLight = new THREE.AmbientLight('white', 2);

    const hemislight = new THREE.HemisphereLight('white', 'darkslategrey', 8);

    const light = new THREE.DirectionalLight('white', 3);
    light.position.set(10, 10, 10);

    return {
        ambientLight,
        light,
        hemislight
    }
}

// Shere Boxes
function spherBoxes() {
    const radius = 0.25;
    const widthSegments = 16;
    const heightSegments = 16;

    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    // Groups occupy a position in the scene graph and can have children, but are themselves invisible. If the Scene represents the entire universe, then you can think of a Group as a single compound object within that universe.
    const scene = new THREE.Scene();

    const group = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({ color: 'indigo' });

    for (let i = 0; i < 100; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 25 - 10;
        mesh.position.y = Math.random() * 25 - 10;
        mesh.position.z = Math.random() * 25 - 10;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        mesh.scale.setScalar(Math.random() + 0.9);
        group.add(mesh);
    }

    group.tick = (delta) => {
        group.rotation.y += 0.02;
    }

    scene.add(group);

    // group.add(sphere);
    // group.add(box);
    // group.add(plane);
    // we can also clone mesh and add it to the group
    return {
        scene,
        group
    }
}

function createMeshGroup() {
    const group = new THREE.Group();

    const geometry = new THREE.SphereGeometry(0.25, 16, 16);

    const material = new THREE.MeshStandardMaterial({
        color: 'blue',
    });

    const protoSphere = new THREE.Mesh(geometry, material);

    // add the protoSphere to the group
    group.add(protoSphere);
    group.position.x = 30;
    group.position.y = 15;

    // create twenty clones of the protoSphere
    // and add each to the group
    for (let i = 0; i < 1; i += 0.05) {
        const sphere = protoSphere.clone();
        // gap between each sphere

        // position the spheres on around a circle
        sphere.position.x = Math.cos(2 * Math.PI * i);
        sphere.position.y = Math.sin(2 * Math.PI * i);
        // sphere.position.z = Math.sin(2 * Math.PI * i);
        // sphere.position.z = -i * 5;

        sphere.scale.multiplyScalar(0.09 + i);

        group.add(sphere);
    }

    // every sphere inside the group will be scaled
    group.scale.multiplyScalar(8);

    const radiansPerSecond = MathUtils.degToRad(30);

    // each frame, rotate the entire group of spheres
    group.tick = (delta) => {
        group.rotation.z = delta * radiansPerSecond;
    };

    return group;
}

// Random Part9cles
function randomParticles() {
    const geometry = new THREE.SphereGeometry(0.25, 16, 16);
    // cube
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
        colors[i] = Math.random();
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeBoundingSphere();
    const material = new THREE.PointsMaterial({ size: .2, vertexColors: true });
    const particles = new THREE.Points(geometry, material);
    return particles;

}


class NewScen {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('skyblue');
        this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100);
        this.renderer = new THREE.WebGLRenderer(
            {
                antialias: true,
                alpha: true
            }
        );
        this.container = document.querySelector('#app');
        const { light, ambientLight, hemislight } = creatLight();
        this.light = light;
        this.ambientLight = ambientLight;
        this.hemislight = hemislight;

        this.scene.add(this.light);
        // this.scene.add(this.hemislight);
        this.scene.add(this.ambientLight);


        // constroller
        const constroller = creatControls(this.camera, this.renderer);
        // loopp
        this.loop = new Loop(this.camera, this.scene, this.renderer);

        // Resixer
        // const resizer = new Resizer(this.container, this.camera, this.renderer);

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.physicallyCorrectLights = true;
        this.container.append(this.renderer.domElement);


        // Light 
        this.light.position.set(10, 12, 5);
        this.scene.add(this.light);

        // cone
        this.cone = cone();
        this.scene.add(this.cone);
        this.loop.updatables.push(this.cone); // add the cube to the loop's updatables array
        this.loop.start(); // start the loop

        this.sphere = sphere();
        this.scene.add(this.sphere);

        this.plane = plane();
        this.scene.add(this.plane);

        this.box = box();
        this.scene.add(this.box);

        const { scene, group } = spherBoxes();
        this.scene.add(scene);
        this.group = group;
        this.loop.updatables.push(this.group); // add the cube to the loop's updatables array
        this.loop.start(); // start the loop

        this.meshGroup = createMeshGroup();
        this.scene.add(this.meshGroup);
        this.loop.updatables.push(this.meshGroup); // add the cube to the loop's updatables array
        this.loop.start(); // start the loop

        // Random particles
        this.randomParticles = randomParticles();
        this.randomParticles.position.set(-30, 15, 1);
        this.scene.add(this.randomParticles);


        this.renderer.render(this.scene, this.camera);
        this.animate();
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }




}

export { NewScen }