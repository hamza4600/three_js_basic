import { Color, Scene } from 'three';

function creatScene() {
    const scene = new Scene();

    scene.background = new Color('skyblue');  
    return scene;
}

export { creatScene };