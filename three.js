import * as THREE from 'three';


export function main(container) {
    console.log('main() called');
    // all function to be exituctes here
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100)
    // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // for the line 
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(- 10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    // for the Cube
    const geometryCube = new THREE.BoxGeometry()
    let color = 0x44aa88;
    const materialCube = new THREE.MeshBasicMaterial({ color: color })
    const cube = new THREE.Mesh(geometryCube, materialCube)
    // position the cube
    cube.position.x = 10;
    cube.position.y = 10;
    cube.position.z = 0;
    // size the cube
    cube.scale.x = 20;
    cube.scale.y = 2;
    cube.scale.z = 2;
    // rotate the cube
    function animate() {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
    }
    animate()

    // sphere
    const geometrySphere = new THREE.SphereGeometry(5, 32, 32);
    let colorSphere = 0xffff00;
    const materialSphere = new THREE.MeshBasicMaterial({ color: colorSphere });
    const sphere = new THREE.Mesh(geometrySphere, materialSphere);
    sphere.position.x = -10;
    sphere.position.y = 10;
    sphere.position.z = 0;
    // 
    function animateSphere() {
        requestAnimationFrame(animateSphere)
        sphere.rotation.x += 0.01
        sphere.rotation.y += 0.01
        colorSphere = "0x00ff0";
        // border color of the sphere
        materialSphere.color.setHex(colorSphere);
        function updateOrbit() {
            sphere.position.x += 0.1;
            sphere.position.y += 0.1;
            if (sphere.position.x > 20
                || sphere.position.y > 20) {
                sphere.position.x = -20;
                sphere.position.y = -20;
            } else if (sphere.position.y > 20
                || sphere.position.x > 20) {
                sphere.position.y = -20;
                sphere.position.x = -20;
            }
        }
        updateOrbit();
        renderer.render(scene, camera)
    }
    animateSphere()

    //  add circles
    const circle = new THREE.Shape();
    circle.moveTo(0, 0);
    circle.absarc(0, 0, 5, 0, Math.PI * 2, false);
    const geometryCircle = new THREE.ShapeGeometry(circle);
    let nenoLight = "white";
    const materialCircle = new THREE.MeshBasicMaterial({ color: nenoLight });
    const meshCircle = new THREE.Mesh(geometryCircle, materialCircle);
    meshCircle.position.x = 30;
    meshCircle.position.y = 10;
    meshCircle.position.z = 0;


    function bounce() {
        requestAnimationFrame(bounce)
        //  bounce the circle
        meshCircle.position.y += 0.1;
        if (
            meshCircle.position.y > 20
        ) {
            // meshCircle.position.y -= 0.1;
            meshCircle.position.y = 1;
        } else if (meshCircle.position.y < -20) {
            meshCircle.position.y += 0.1;
        }

        renderer.render(scene, camera)
    }
    bounce()

    //  add a plane
    const planeGeometry = new THREE.PlaneGeometry(100, 100, 32);
    let skyBlue = "rgb(5, 106, 5 )";
    const planeMaterial = new THREE.MeshBasicMaterial({ color: skyBlue, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.x = 0;
    plane.position.y = 40;
    plane.position.z = 0;
    plane.rotation.x = Math.PI / 2;

    scene.add(plane);
    scene.add(meshCircle);
    scene.add(sphere);
    scene.add(cube)

    renderer.render(scene, camera)

}
