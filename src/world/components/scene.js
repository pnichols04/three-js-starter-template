import { Color, Scene } from "three";

/** Initializes a Three.js Scene 
 * @return {import("three").Scene}
*/
function createScene() {

	const scene = new Scene();

	scene.background = new Color( 0x191970 );

	return scene;

}

export { createScene };
