import { World } from "./world/world.js";

/** Bootstraps a Three.js app */
async function main() {

	// Get a reference to the canvas element
	const container = document.querySelector( "#scene-container" );

	// Create an instance of the World app
	const world = new World( container );

	// Perform any asynchronous initialization
	await world.init();

	// Start the animation loop
	world.start();

}

// Start the app
main().catch( ( err ) => {

	console.error( err );

} );
