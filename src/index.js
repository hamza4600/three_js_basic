import DayFive from "./days/five";
import DayFour from "./days/four";
import { NewScen } from "./days/three";
import One from "./one";
import { World } from "./world";

function MainRoot() {
    One();
    // Modular World
    const container = document.querySelector('#one');
    const world = new World(container);
    
    const dayThree = new NewScen();
    
    // Day foure 
    const dayFour = new DayFour();
    // day Five 
    const dayFive = new DayFive();
    
    world.render();
}

export default MainRoot;

