import { WebGLRenderer } from "three";

/** Initiliazes a Three.js WebGLRenderer
 * @return {import("three").WebGLRenderer}
 */
function createRenderer() {

	const renderer = new WebGLRenderer( {
		antialias: true
	} );

	renderer.physicallyCorrectLights = true;

	return renderer;

}

export { createRenderer };
