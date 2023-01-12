// Learing Threes js Basics
import * as THREE from 'three';
import { Mesh, PerspectiveCamera, Scene, WebGLRenderer, BoxGeometry, Color, MeshBasicMaterial } from "three";

function One() {
    // ...
    console.log('One() called');
    let body = document.querySelector('body');
    let div = document.createElement('div');
    div.innerHTML = 'Day One of Three  Js';
    div.setAttribute('id', 'one');
    body.appendChild(div);

    const container = document.querySelector('#one');

    // ...
    // Scene is a container for all the objects in the scene small Universe
    // works like a stage in a theater where all the actors and props are placed
    let scene = new Scene();
    scene.background = new Color('skyblue');
    // PerspectiveCamera is a camera that simulates the perspective of the human eye 
    // it is the most common camera used for rendering a 3D scene 
    const fov = 100; // field of view in degrees
    const aspect = window.innerWidth / window.innerHeight;  // the canvas default size
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane
    let camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 5, 10); // set the camera position together
    // camera.position.z = 5; // set the camera position
    // camera.position.x = 5; // set the camera position
    // camera.position.y = 5; // set the camera position



    // OrthographicCamera is a camera that uses orthographic projection
    // mostaly used for 2D rendering

    //If the scene is a tiny universe, and the camera is a telescope pointed at that universe, then the renderer is an artist who looks through the telescope and draws what they see onto a <canvas>, incredibly fast. We call this process rendering, and the resulting picture is a render.

    //WebGLRenderer is a renderer that uses WebGL to render the scene. WebGL is a JavaScript API for rendering 3D graphics within any compatible web browser without the use of plug-ins. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can be used in HTML5 <canvas> elements. WebGL is integrated into all modern web browsers, and can be used to display interactive 3D graphics within any compatible web browser without the use of plug-ins.

    const renderer = new WebGLRenderer();


    // Two main parts geometry and material
    // Geometry is the shape of the object
    // we use BufferGeometry to define the shape of the object and BoxBufferGeometry to create a box
    // BoxBufferGeometry( width, height, depth, widthSegments, heightSegments, depthSegments )
    const length = 2;
    const width = 2;
    const depth = 2;
    const geometry = new BoxGeometry(length, width, depth);

    // Material is the surface of the object  to define the surface of the object look and feel 
    // we use MeshBasicMaterial to create a material
    const material = new MeshBasicMaterial({ color: 0x44aa8 }); // greenish blue

    // mesh is a combination of geometry and material
    // mesh is an object that takes a geometry, and applies a material to it, which we end up seeing on the screen. A geometry defines the shape of a mesh, and a material determines how the surface of the mesh looks. A mesh can be defined with a Geometry and a set of default materials. The default materials are MeshBasicMaterial, MeshLambertMaterial, and MeshPhongMaterial. The default material is MeshBasicMaterial, which is a material that does not respond to light. The other two materials, MeshLambertMaterial and MeshPhongMaterial, are materials that respond to light. The difference between the two is that MeshLambertMaterial is a simple shading model that calculates light as if it were coming from a single light source, whereas MeshPhongMaterial is a more complex shading model that calculates light as if it were coming from multiple light sources.

    const mesh = new Mesh(geometry, material);
    scene.add(mesh); // add the mesh to the scene

    // SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
    const geometrySphere = new THREE.SphereGeometry(5, 100, 100);
    let colorSphere = new THREE.Color("rgb(255, 50, 0)");
    const materialSphere = new THREE.MeshBasicMaterial({ color: colorSphere });
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);
    sphere.position.x = 0;
    sphere.position.y = 10;
    sphere.position.z = 1;
    scene.add(sphere);

    // for the Cube
    const geometryCube = new THREE.BoxGeometry()
    let color = new THREE.Color("rgb(255, 0, 0)");
    const materialCube = new THREE.MeshBasicMaterial({ color: color })
    const cube = new THREE.Mesh(geometryCube, materialCube)
    // position the cube
    cube.position.x = -10;
    cube.position.y = 1;
    cube.position.z = 0.5;
    // size the cube
    cube.scale.x = 2.5;
    cube.scale.y = 2.5;
    cube.scale.z = 4;
    // animate the cube
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // color of the cube
        color.setHSL(0.5 + 0.5 * Math.sin(0.01 * Date.now()), 1.0, 0.1);
        materialCube.color = color;
        renderer.render(scene, camera);
    }
    animate();
    scene.add(cube);

    renderer.setSize(window.innerWidth, window.innerHeight); // set the size of the renderer
    renderer.setPixelRatio(window.devicePixelRatio); // set the pixel ratio of the renderer
    container.append(renderer.domElement); // add the renderer to the DOM
    // console.log('renderer.domElement', renderer.domElement);
    renderer.render(scene, camera); // render the scene 

}

export default One;