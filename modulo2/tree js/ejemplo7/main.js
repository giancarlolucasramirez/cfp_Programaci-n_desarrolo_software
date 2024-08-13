const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let loader = new THREE.TextureLoader();
loader.load(
    "imagen2.jpg",
    (texture) => {
        material.map = texture;
        material.needsUpdate = true; // Asegúrate de que el material se actualice
        animate();
    },
    undefined,
    (err) => {
        console.error('Error al cargar la textura:', err);
    }
);

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
