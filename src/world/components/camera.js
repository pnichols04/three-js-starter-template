import { PerspectiveCamera } from 'three';

function createCamera() {

	const camera = new PerspectiveCamera(
		70, // fov = Field Of View
		1, // aspect ratio (dummy value)
		0.1, // near clipping plane
		250, // far clipping plane
	);

	// move the camera back so we can view the scene
	camera.position.set( 0, 0, 10 );

	return camera;

}

export { createCamera };
