import {
	DirectionalLight,
	HemisphereLight } from "three";

/** Initializes a directional key light and an ambient
 * hemisphere light for a Three.js world
*/
function createLights() {

	// Create a directional light
	const mainLight = new DirectionalLight( "white", 8 );

	// Move the light right, up, and towards the camera
	mainLight.position.set( 10, 10, 10 );

	// Create ambient lighting
	const ambientLight = new HemisphereLight(
		"white", // bright sky color
		"darkslategray", // dim ground color
		5 // intensity
	);

	return [ mainLight, ambientLight ];

}

export { createLights };
