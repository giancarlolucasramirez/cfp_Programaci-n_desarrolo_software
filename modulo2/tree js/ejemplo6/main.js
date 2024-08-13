
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Creates renderer and adds it to the DOM

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//The Sphere!

const geometry = new THREE.SphereGeometry( 15   , 30, 30 ); 

var material = new THREE.MeshBasicMaterial(  );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
let loader1 = new THREE.TextureLoader()
loader1.load("earthmap1k (1).jpg",(texture)=>{
    material.map = texture
    render()
})
camera.position.z = 30;

//Rendering

function render() {
    renderer.render( scene, camera );
    
}
