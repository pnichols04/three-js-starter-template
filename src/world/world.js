import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";
import { createGui } from "./systems/gui.js";
import { createStats } from "./systems/stats.js";
import { createCube } from "./components/cube.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/resizer.js";
import { Loop } from "./systems/loop.js";

/** @type {import("three").PerspectiveCamera} */
let camera;
/** @type {import("three").Scene} */
let scene;
/** @type {import("three").WebGLRenderer} */
let renderer;
/** @type {import("./systems/loop.js").Loop} */
let loop;

/** Composes the objects that participate in a Three.js app */
class World {

	/**
	 * Initializes a new instance of the World class
	 * @param {Element} container The DOM element into which
	 * the rendering canvas should be injected
	 */
	constructor( container ) {

		camera = createCamera();
		scene = createScene();
		renderer = createRenderer();
		loop = new Loop( camera, scene, renderer );
		container.append( renderer.domElement );

		const [ mainLight, ambientLight ] = createLights();

		scene.add( mainLight, ambientLight );

		const resizer = new Resizer( container, camera, renderer );

		const gui = createGui( container, loop );
		const stats = createStats( container );
		loop.updatables.push( stats );

		const cube = createCube();
		loop.updatables.push( cube );
		scene.add( cube );

	}

	/** Performs any ansynchronous initiliazation needed by
	 * a Three.js world
	 */
	async init() {

	}

	/** Renders a single frame */
	render() {

		// Draw a single frame
		renderer.render( scene, camera );

	}

	/** Starts an animation loop */
	start() {

		loop.start();

	}

	/** Stops an animation loop */
	stop() {

		loop.stop();

	}

}

export { World };
