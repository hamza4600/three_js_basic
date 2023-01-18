import One from "./one";
import { NewScen } from "./three";
import { World } from "./world";

function MainRoot() {
    One();
    // Modular World
    const container = document.querySelector('#one');
    const world = new World(container);
    
    const dayThree = new NewScen();
    
    world.render();
}

export default MainRoot;

