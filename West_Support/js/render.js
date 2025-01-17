var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(1280, 720);//Original 640x480 is too small!
document.body.appendChild(renderer.domElement);

var directionalLight = new THREE.DirectionalLight( 0xffffff );
                directionalLight.position.x = 0; 
                directionalLight.position.y = 0; 
                directionalLight.position.z = 1; 
                directionalLight.position.normalize();
                scene.add( directionalLight );

var material = new THREE.MeshPhongMaterial( { overdraw: true, color: 0x33387b, shininess: 30} );
var mesh;

camera.position.z = 20;
camera.position.x = 0;
camera.position.y = 0;

var animate = function () {
	if (mesh) {
		mesh.rotation.y += 0.01;
		mesh.rotation.z += 0.01;
	}

	renderer.render (scene, camera);

	requestAnimationFrame (animate);
}

function updateGeo(geometry) {
	geometry.computeFaceNormals();
	mesh = new THREE.Mesh (geometry,     
		material
	);

	scene.add (mesh);
	renderer.render (scene, camera);
}
