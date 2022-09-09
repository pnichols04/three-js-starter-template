import { Color, Scene } from "three";

function createScene() {

	const scene = new Scene();

	scene.background = new Color( 0x191970 );

	return scene;

}

export { createScene };
