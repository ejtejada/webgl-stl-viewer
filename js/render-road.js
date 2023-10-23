var sceneRoad = new THREE.Scene();
var cameraRoad = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var rendererRoad = new THREE.WebGLRenderer();
rendererRoad.setSize(1280, 720);//Original 640x480 is too small!
document.body.appendChild(rendererRoad.domElement);

var directionalLightRoad = new THREE.DirectionalLight( 0xffffff );
                directionalLightRoad.position.x = 0; 
                directionalLightRoad.position.y = 0; 
                directionalLightRoad.position.z = 1; 
                directionalLightRoad.position.normalize();
                sceneRoad.add( directionalLightRoad );

var materialRoad = new THREE.MeshPhongMaterial( { overdraw: true, color: 0xff0000, shininess: 30} );
var meshRoad;

cameraRoad.position.z = 30;
cameraRoad.position.x = 0;
cameraRoad.position.y = 0;

var animateRoad = function () {
	if (meshRoad) {
		meshRoad.rotation.y += 0.01;
		meshRoad.rotation.z += 0.00;
	}

	rendererRoad.render (sceneRoad, cameraRoad);

	requestAnimationFrame (animateRoad);
}

function updateGeoRoad(geometry) {
	geometry.computeFaceNormals();
	meshRoad = new THREE.Mesh (geometry,     
		materialRoad
	);

	sceneRoad.add (meshRoad);
	rendererRoad.render (sceneRoad, cameraRoad);
}
