import { Mesh, MeshStandardMaterial } from "three";
import { RoundedBoxGeometry } from "https://unpkg.com/three@0.143.0/examples/jsm/geometries/RoundedBoxGeometry.js";
import { params } from "../params.js";

function createCubeGui( gui ) {

	const cubeFolder = gui.addFolder( "Spinning cube" );
	cubeFolder.add( params.cube, "degreesPerSecond", 0, 180, 1 )
		.name( "Degrees per second" );

}

/** Creates a rounded cube and animates its rotation */
function createCube() {

	const geometry = new RoundedBoxGeometry( 2, 2, 2, 3, 0.1 );
	const material = new MeshStandardMaterial(
		{
			color: "green",
			metalness: 1.0,
			roughness: 0.5,
		} );
	const cube = new Mesh( geometry, material );

	cube.tick = ( delta ) => {

		cube.rotation.z += delta * Math.PI * params.cube.degreesPerSecond / 180.;
		cube.rotation.x += delta * Math.PI * params.cube.degreesPerSecond / 180.;
		cube.rotation.y += delta * Math.PI * params.cube.degreesPerSecond / 180.;

	};

	return cube;

}

export { createCube, createCubeGui };
