// Creat a Modular World Object with a constructor function
import * as THREE from "three";
import { creatCamera } from "../component/camera";
import { creatCube } from "../component/cube";
import { creatLight } from "../component/light";
import { creatScene } from "../component/scene";
import { creatRenderer } from "../system/render";
import { Resizer } from "../system/resize";
import { Mesh, Quaternion } from "three";

let camera, scene, renderer;

class World {

    constructor(container) {
        camera = creatCamera()
        scene = creatScene()
        renderer = creatRenderer()
        container.appendChild(renderer.domElement);

        const cube = creatCube();

        cube.position.set(0, 0, 0);
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        const light = creatLight();
        const cube2 = creatCube();
        cube2.position.set(2, 6, 0);
        cube2.rotation.set(0.9, 0.1, 0.8)
        cube2.scale.set(0.5, 1, 1)
    
        // 
        const mesh  = new Mesh(cube2.geometry, cube2.material);
        mesh.rotation.set(0.9, 0.1, 0.8)
        mesh.position.set(6, 1, 0);
        mesh.scale.set(0.5, 1, 100)
        scene.add(mesh);


        scene.add(cube2);
        scene.add(cube, light);

        const resizer = new Resizer(container, camera, renderer);
    }


    render() {
        console.log('rendering world');

        renderer.render(scene, camera);
    }
}

export { World };

/* Basic of Light and Rendering 
 physical base rendering  is the process of calculating the light that is reflected from a surface and the light that is absorbed by a surface. 

 The light that is reflected from a surface is called the specular reflection. The light that is absorbed by a surface is called the diffuse reflection.

 The specular reflection is the light that is reflected from a surface in a specific direction. The diffuse reflection is the light that is reflected from a surface in all directions.

 DirectionalLight( color, intensity ) 
ray of light interact with material and the material will reflect the light in a specific direction.
MeshPhongMaterial( parameters )
MeshBasicMaterial( parameters )
MeshLambertMaterial( parameters )
MeshStandardMaterial( parameters )
are the material that will interact with the light and reflect the light in a specific direction.

Direted Light which simulate direct light from a light source.
Ambient Light which simulate indirect light from a light source.

DirectionalLight => Sunlight

PointLight => Light Bulbs

RectAreaLight => Strip lighting or bright windows

SpotLight => Spotlights

MeshStandardMaterial => Material that reflect light in a specific direction.
MeshBasicMaterial => Material that reflect light in a specific direction.
MeshLambertMaterial => Material that reflect light in all directions.
MeshPhongMaterial => Material that reflect light in a specific direction.


When creating a 3D scene, the only limit is your imagination - and the depth of your technical knowledge.
mathematical operations called transformations that are used to move objects around within a coordinate system.

.position => used to move the object around within the coordinate system.
.rotation => used to rotate the object around within the coordinate system.
.scale => used to scale the object around within the coordinate system.
.matrix => used to move, rotate, and scale the object around within the coordinate system.
.matrixAutoUpdate => used to move, rotate, and scale the object around within the coordinate system.

.add => used to add the object to the scene. 
to the light , camera , mesh , and scene. like a parent-child relationship. or Graphical Hierarchy.
.remove => used to remove the object from the scene.

Each object in the scene graph (except the top-level scene) has exactly one parent, and can have any number of children.

3D objects are created using the geometry and material classes.
x, y, and z axes are used to define the position of an object within the coordinate system.

When we create a mesh or a light, we also create a new local coordinate system, with the mesh or light at its center. 
mesh has its own local coordinate system, with the mesh at its center.
light has its own local coordinate system, with the light at its center.
scene has its own local coordinate system, with the scene at its center.

Scene Graph
The scene graph is a tree structure that contains all the objects in the scene. 
The top-level node in the scene graph is the scene itself.
The scene graph is used to organize the objects in the scene.
The scene graph is used to move, rotate, and scale the objects in the scene.
The scene graph is used to render the objects in the scene.

 scene.add, we embed this object within the scene’s coordinate system, world space. When we move the object around, it will move relative to world space 
 
what you see on your screen is the viewpoint of the camera

new Vector3( x, y, z ) => used to create a new vector with the x, y, and z coordinates.

Euler( x, y, z, order ) => used to create a new Euler object with the x, y, and z coordinates.
used to rotate the object around within the coordinate system.

Quaternion => used to rotate the object around within the coordinate system.

*/