
const select = document.querySelector('select');


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
scene.add(camera);
camera.position.set(-7, 5, 10);
camera.lookAt(new THREE.Vector3());

// Configuración del renderer
var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 3.5;
renderer.setPixelRatio(2);

const orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.maxPolarAngle = Math.PI * 0.55;
orbitControls.minPolarAngle = Math.PI * 0.2;

const castShadows = () => {
    scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.envMapIntensity = 0.38;
        }
    });
};

const loadingManager = new THREE.LoadingManager(() => {
    castShadows();
});
const gltfLoader = new THREE.GLTFLoader(loadingManager);

const droneParts = {
    motor: new THREE.Group(),
    helices: new THREE.Group(),
    base: new THREE.Group(),
    camaras: new THREE.Group(),
};

gltfLoader.load('./model/base/Base.gltf', function (gltf) {
    droneParts.base.add(gltf.scene);
}, undefined, function (error) {
    console.error('Error al cargar el modelo Base:', error);
});

gltfLoader.load('./model/cam/Cam1.gltf', function (gltf) {
    droneParts.camaras.add(gltf.scene);
}, undefined, function (error) {
    console.error('Error al cargar el modelo Cam1:', error);
});

gltfLoader.load('./model/motor/Motor2.gltf', function (gltf) {
    droneParts.motor.add(gltf.scene);
}, undefined, function (error) {
    console.error('Error al cargar el modelo Motor2:', error);
});

gltfLoader.load('./model/helices/Helice3.gltf', function (gltf) {
    gltf.scene.traverse(function (child) {
        if (child.isMesh) {
            child.name = 'helice1';
        }
    });
    droneParts.helices.add(gltf.scene);
}, undefined, function (error) {
    console.error('Error al cargar el modelo Helice3:', error);
});

scene.add(droneParts.base);
scene.add(droneParts.camaras);
scene.add(droneParts.motor);
scene.add(droneParts.helices);

const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.ShadowMaterial({ opacity: 0.5 })
);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
plane.receiveShadow = true;
scene.add(plane);

document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0xfafaf9);

const light1 = new THREE.DirectionalLight(0xfcfcfc, 4.3);
light1.position.set(0, 6, 1);
light1.castShadow = true;
light1.shadow.mapSize.set(2048, 2048);
light1.shadow.bias = -0.000131;
scene.add(light1);

const al = new THREE.AmbientLight(0x208080, 0.61);
scene.add(al);


const clock = new THREE.Clock()

const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    const movement = Math.sin(elapsedTime)
    droneParts.base.position.y = movement * 1
    droneParts.camaras.position.y = movement * 1
    droneParts.motor.position.y = movement * 1
    droneParts.helices.position.y = movement * 1

    droneParts.base.position.x = movement * 1
    droneParts.camaras.position.x = movement * 1
    droneParts.motor.position.x = movement * 1
    droneParts.helices.position.x = movement * 1

    try {
        for (
            let i = 0;
            i < droneParts.helices.children.length;
            i++
        ) {
            droneParts.helices.traverse(function (child) {
                if (child.name === 'helice1') {
                    child.rotation.y += 0.4;
                }
            });
        }
    } catch (error) { }
    orbitControls.update()

    //post processing render
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate()
/* function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);

    droneParts.helices.traverse(function (child) {
        if (child.name === 'helice1') {
            child.rotation.y += 0.1;
        }
    });
}
render(); */
select.addEventListener('click', function () {
    select.addEventListener("keydown", (e) => {
        if (!e.repeat) {
            console.log(`Key "${e.key}" pressed [event: keydown]`);
        } else {
            console.log(`Key "${e.key}" repeating [event: keydown]`);
        }
    });
})


