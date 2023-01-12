import One from "./one";
import { World } from "./world";

function MainRoot() {
    One();
    // Modular World
    const container = document.querySelector('#one');
    const world = new World(container);
    world.render();
}

export default MainRoot;