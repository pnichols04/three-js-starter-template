import { GUI } from "https://unpkg.com/three@0.143.0/examples/jsm/libs/lil-gui.module.min.js";

/** @type {import("https://unpkg.com/three@0.143.0/examples/jsm/libs/lil-gui.module.min.js").GUI} */
function createGui() {

	const gui = new GUI();

	const resetButton = gui.add( gui, "reset" ).name( "&#x1f5d8;&ensp;Reset values" );

	return gui;

}

export { createGui };
