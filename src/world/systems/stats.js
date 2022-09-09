import Stats from "https://unpkg.com/three@0.143.0/examples/jsm/libs/stats.module.js";

/**
 * Creates a stats module for a Three.js world
 * @param {Element} container The DOM element into which to insert the stats module
 * @return {Stats} A stats object
 */
function createStats( container ) {

	const stats = new Stats();
	// Monkey-patch a tick method onto stats to support its
	// use in loop.updatables
	stats.tick = stats.update;
	container.appendChild( stats.dom );

	return stats;

}

export { createStats };
