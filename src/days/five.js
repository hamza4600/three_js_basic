// Loading Models and Animations Assists in app
import * as THREE from 'three';
// import { creatControls } from '../system/constrols';
import { Loop } from '../system/loop';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


// new Controlle
function creatControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    controls.minDistance = 10;
    controls.maxDistance = 100;

    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;


    // Update Camera Position
    camera.position.set(1, 0, 55); // set the camera position
    camera.rotation.set(0, 0, 0); // set the camera rotation

    // controls.minAzimuthAngle = -Infinity;
    controls.tick = () => controls.update();

    return controls;
}

function dodecahedron() {
    const geometryTorus = new THREE.TorusGeometry(5, 1, 16, 100);
    let colorTorus = new THREE.Color("rgb(250, 20, 140)");
    const materialTorus = new THREE.MeshStandardMaterial(
        {
            color: colorTorus,

        }
    );
    const torus = new THREE.Mesh(geometryTorus, materialTorus);
    torus.position.x = -50;
    torus.position.y = 15;
    torus.position.z = 0;
    torus.tick = (delta) => {
        torus.rotation.y += 0.01;
    }
    return torus;
}

// 
function creatLight() {
    const hemislight = new THREE.HemisphereLight('white', 'darkslategrey', 8);
    return {
        hemislight
    }
}

// Loading Models and Animations Assists in app
function loadModel(path, onProgress) {
    return new Promise((resolve) => {
        new GLTFLoader().load(path, resolve, onProgress);
    });
}

// 
function setupModel(data) {
    const model = data.scene.children[0];

    // Animation 
    // const time = [0, 3, 6];
    // const values = [0, 0, 0, 2, 2, 2, 0, 0, 0];/
    // const positionKF = new THREE.VectorKeyframeTrack('.position', time, values);
    // const track = [positionKF];
    // const length = -1;
    // const clip = new THREE.AnimationClip('Action', length, track);

     
    // const clip = data.animations[0];
    // const mixer = new THREE.AnimationMixer(model); // Animation Mixer is used to play, pause, and stop animations.
    
    // const action = mixer.clipAction(clip);
    // action.play();
    // action.setLoop(THREE.LoopOnce);

    // model.tick = (delta) => {
    //     mixer.update(delta);
    // }

    return model;
}

// Model 
// for multple models we can use
// Promise.all
async function model() {
    const parrotData = await loadModel('/model/Parrot.glb');
 
    const flam = await loadModel('/model/Flamingo.glb');
    const stro = await loadModel('/model/Stork.glb');

    const flaming = setupModel(flam);

    flaming.scale.set(0.5, 0.5, 0.5);
    flaming.position.set(40, -20, -30);


    const stroke = setupModel(stro);
    stroke.scale.set(0.5, 0.5, 0.5);
    stroke.position.set(-20, -40, -50);

    const parrot = setupModel(parrotData);
    parrot.position.set(-80, 0, 12.5);
    parrot.scale.set(0.5, 0.5, 0.5);

    // copy of parrot
    const parrot2 = parrot.clone();
    parrot2.position.set(10, 20, -22.5);
    parrot2.scale.set(0.5, 0.5, 0.5);


    // animation
    parrot.tick = () => {
        parrot.rotation.y += 0.01;
    };


    return { parrot, parrot2, flaming, stroke };

}
// we only neeed camer , scene and animation to work on 

class DayFive {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('lightblue');
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

        // Loop  for animation
        this.loop = new Loop(this.camera, this.scene, this.renderer)

        // controllers
        this.controler = creatControls(this.camera, this.renderer);
        this.loop.updatables.push(this.controler);
        this.loop.start();

        // Lights
        const { hemislight } = creatLight();
        this.hemislight = hemislight;
        this.scene.add(this.hemislight);

        // Loading Models and Animations Assists in app
        this.init();

        // Dodecahedron
        this.dodecahedron = dodecahedron();
        this.loop.updatables.push(this.dodecahedron);
        this.loop.start();

        this.scene.add(this.dodecahedron);

        this.renderer.render(this.scene, this.camera);

    }


    async init() {
        const { parrot, parrot2, flaming, stroke } = await model();
        this.scene.add(parrot, parrot2, flaming, stroke);

        // animation
        // this.loop.updatables.push(parrot2, flaming, stroke);


        this.loop.updatables.push(parrot);
        this.loop.start();

        // position
        // this.controler.target.copy(parrot.position);
    }

}


export default DayFive;
/*

To create beautiful 3D models, a sophisticated modeling program is required. You can use three.js to build any kind of 3D application, however, building a modeling app from scratch would be a huge amount of work.

glTF is a file format for 3D models that is supported by many 3D modeling programs. It is a binary format that is optimized for efficient transmission and storage. It is also a JSON format that is optimized for readability and editing. 

The glTF format is a good choice for 3D models that you want to load into your three.js application.
other types are  f

To create beautiful 3D models, a sophisticated modeling program is required. You can use three.js to build any kind of 3D application, however, building a modeling app from scratch would be a huge amount of work.

keyframes are the positions of the model at specific times.

vector animate any property of a model, such as position, rotation, and scale.
Quaternion animate any property of a model, such as position, rotation, and scale.
euler animate any property of a model, such as position, rotation, and scale.

keyframeTrack is base class for all keyframe tracks.
NumberKeyframeTrack is a track for scalar numeric values.
VectorKeyframeTrack is a track for vector numeric values.
ColorKeyframeTrack is a track for color values.
QuaternionKeyframeTrack is a track for quaternion values.
StringKeyframeTrack is a track for string values.
*/