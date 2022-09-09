import { Clock, EventDispatcher } from "three";

const clock = new Clock();
let startButton, stopButton;

/**
 * Creates GUI for the animation loop
 * @param {Loop} loop
 * @param {import("https://unpkg.com/three@0.143.0/examples/jsm/libs/lil-gui.module.min.js").GUI} gui
 */
function createLoopGui( loop, gui ) {

	const loopFolder = gui.addFolder( "Animation loop" );
	startButton = loopFolder.add( loop, "start" )
		.name( "&#x23f5;&#xfe0e;&ensp;Play" );
	if ( loop.isRunning ) {

		startButton.disable();

	}

	stopButton = loopFolder.add( loop, "stop" )
		.name( "&#x23f8;&#xfe0e;&ensp;Pause" );
	if ( ! loop.isRunning ) {

		stopButton.disable();

	}

	loop.addEventListener( "start", function () {

		startButton.disable();
		stopButton.enable();

	} );

	loop.addEventListener( "stop", function () {

		startButton.enable();
		stopButton.disable();

	} );

}

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
		this._isRunning = false;

	}

	start() {

		if ( ! this.isRunning ) {

			this.renderer.setAnimationLoop( () => {

				this.tick();

				// Render a frame
				this.renderer.render( this.scene, this.camera );

			} );
			this._isRunning = true;

			this.dispatchEvent( { type: "start", message: "" } );

		}

	}

	stop() {

		if ( this.isRunning ) {

			this.renderer.setAnimationLoop( null );

			this._isRunning = false;
			this.dispatchEvent( { type: "stop", message: "" } );

		}

	}

	tick() {

		const delta = clock.getDelta();

		for ( const object of this.updatables ) {

			object.tick( delta );

		}

	}

	get isRunning() {

		return this._isRunning;

	}

}

export { Loop, createLoopGui };
