var scene, renderer, camera;
var cube;
var controls;

init();
animate();

function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    const loader = new THREE.GLTFLoader();
    loader.load(
        './adamHead/adamHead.gltf', 
        function (gltf) {
            scene.add(gltf.scene);
            renderer.render(scene, camera);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100 ) + '% cargado');
        },
        function (error) {
            console.error('Un error ocurrió', error);
        }
    );
    const light = new THREE.PointLight( 0xffffff,  3);
    light.position.set( 50, 50, 50 );
    scene.add( light );

    const light2 = new THREE.PointLight( 0xffffff, 3 );
    light2.position.set( -50, -50, -50 );
    scene.add( light2 );


    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    camera.position.z = 6;
    camera.position.x = 6;

    camera.lookAt(new THREE.Vector3( 0, 1, 0));

    controls = new THREE.OrbitControls(camera, renderer.domElement);


}

function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.autoRotate = true;