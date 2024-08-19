var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 50);
var controls;

scene.background = new THREE.Color(0xcdf594);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial();
var cube = new THREE.Mesh(geometry, material);

camera.position.z = 15;

let helice1, motor1;
let cam = new THREE.GLTFLoader();

let loader = new THREE.GLTFLoader();
loader.load(
    './model/base/Base.gltf',
    function (gltf) {
        scene.add(gltf.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
        console.error('Un error ocurrió', error);
    }
);
cam.load(
    './model/cam/Cam1.gltf',
    function (gltf) {
        scene.add(gltf.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
        console.error('Un error ocurrió', error);
    }
);


loader.load(
    './model/motor/Motor2.gltf',
    function (gltf) {
        scene.add(gltf.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
        console.error('Un error ocurrió', error);
    }
);

loader.load(
    './model/helices/Helice3.gltf',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.name = 'helice1';
            }
        });
        scene.add(gltf.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
        console.error('Un error ocurrió', error);
    }
);


const light = new THREE.PointLight(0xffffff, 10);
light.position.set(50, 50, 50);
scene.add(light);

const light2 = new THREE.PointLight(0xffffff, 10);
light2.position.set(-50, -50, -50);
scene.add(light2);

function render() {
    requestAnimationFrame(render);

    // Si la hélice está cargada, rotarla
    if (helice1) {
        helice1.rotation.y += 0.1; // Rota la hélice en el eje Y
    }

    cube.rotation.x += 0.05;
    cube.rotation.z += 0.05;

    renderer.render(scene, camera);
    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
        cube.rotation.x += 0.05;
        cube.rotation.z += 0.05;
        scene.traverse(function (child) {
            if (child.name === 'helice1') {
                child.rotation.y += 0.1;
            }
        });


    }
}
render();

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.autoRotate = true;
