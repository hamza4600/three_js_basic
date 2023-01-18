import { Clock } from "three";

const clock = new Clock();
/*
Clock is a class that is used to keep track of the time between frames.
It is used to calculate the time between frames and the time elapsed since the clock was started.
for animation, we need to know the time between frames and the time elapsed since the clock was started.

renderer.setAnimationLoop( callback ) // callback is a function that is called every time the browser is ready to render a new frame.

60 frames per second
render the frame in less  than 16.6 milliseconds (1000/60)

Game loop basics

Get user input
Calculate physics
Update animations
Render a frame

*/

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [
            // { update: () => { console.log('update'); } }

        ];
    }
    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() { // this is the callback function that is called every time the browser is ready to render a new frame.
        // will call the animate function 
        const elapsedTime = clock.getElapsedTime();
        // update objects
        this.renderer.render(this.scene, this.camera);

        for (const object of this.updatables) {
            object.tick(elapsedTime);
        }
    }
}

export { Loop };