import { GUI } from "https://unpkg.com/three@0.143.0/examples/jsm/libs/lil-gui.module.min.js";
import { params } from "../params.js";

/**
 * Initializes a GUI for a Three.js world
 * @param {Element} container The DOM element into which to insert the GUI
 * @param {import("./loop.js").Loop} loop The Loop object that controls the animation loop
 * @returns {GUI} A lil-gui GUI object
 */
function createGui( container, loop ) {

	const gui = new GUI();

	const resetButton = gui.add( gui, "reset" ).name( "&#x1f5d8;&ensp;Reset values")

	if ( loop ) {

		const loopFolder = gui.addFolder( "Animation loop" );
		const startButton = loopFolder.add( loop, "start" )
			.name( "&#x23f5;&#xfe0e;&ensp;Play" );
		if ( loop.isRunning ) {

			startButton.disable();

		}

		const stopButton = loopFolder.add( loop, "stop" )
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

	const cubeFolder = gui.addFolder( "Cube" );
	cubeFolder.add( params.cube, "degreesPerSecond", 0, 180, 1 )
		.name( "Degrees per second" );

	container.appendChild( gui.domElement );

	return gui;

}

export { createGui };
