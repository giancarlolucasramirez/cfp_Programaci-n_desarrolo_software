//Creates scene and camera

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Creates renderer and adds it to the DOM

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//The Box!

//BoxGeometry (makes a geometry)
var geometry = new THREE.BoxGeometry( 1 , 1, 1 );
//Material to apply to the cube (green)
var material = new THREE.MeshBasicMaterial( { color: 0xf7160b } );
//Applies material to BoxGeometry
var cube = new THREE.Mesh( geometry, material );
//Adds cube to the scene
scene.add( cube );

//Sets camera's distance away from cube (using this explanation only for simplicity's sake - in reality this actually sets the 'depth' of the camera's position)

camera.position.z = 5;

//Rendering

function render() {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
  cube.rotation.x += 0.05;
cube.rotation.y += 0.05;
}
render();