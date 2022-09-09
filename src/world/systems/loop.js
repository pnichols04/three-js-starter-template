import { Clock, EventDispatcher } from "three";

const clock = new Clock();

/** Encapsulates the animation loop for a Three.js world */
class Loop extends EventDispatcher {

	constructor( camera, scene, renderer ) {

		super();

		/** @type {import("three").PerspectiveCamera} */
		this.camera = camera;
		/** @type {import("three").Scene} */
		this.scene = scene;
		/** @type {import("three").WebGLRenderer} */
		this.renderer = renderer;
		this.updatables = [];
		/** @type {boolean} */
		this.isRunning = false;

	}

	start() {

		this.renderer.setAnimationLoop( () => {

			this.tick();

			// Render a frame
			this.renderer.render( this.scene, this.camera );

		} );

		this.isRunning = true;
		this.dispatchEvent( { type: 'start', message: '' } );

	}

	stop() {

		this.renderer.setAnimationLoop( null );

		this.isRunning = false;
		this.dispatchEvent( { type: 'stop', message: '' } );

	}

	tick() {

		const delta = clock.getDelta();

		for ( const object of this.updatables ) {

			object.tick( delta );

		}

	}

}

export { Loop };
