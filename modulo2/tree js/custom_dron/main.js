const motor = document.getElementById("motor");
const helice = document.getElementById("helice");
const camara = document.getElementById("camara");
const base = document.getElementById("base");

const array_motor = [
    {id: 1, text: "motor 1", ruta: "./model/motor/Motor1.gltf"},
    {id: 2, text: "motor 2", ruta: "./model/motor/Motor2.gltf"},
    {id: 3, text: "motor 3", ruta: "./model/motor/Motor3.gltf"}
];

const objeto_base = [
    {id: 1, text4: "base", ruta: " ./model/base/Base.gltf"},

]

const array_helice = [
    {id: 0, text2: "helice 1", ruta: "./model/helices/Helice1.gltf", name: "helice1"},
    {id: 1, text2: "helice 2", ruta: "./model/helices/Helice2.gltf", name: "helice2"},
    {id: 2, text2: "helice 3", ruta: "./model/helices/Helice3.gltf", name: "helice3"}
];

const array_camara = [
    {id: 0, text3: "camara 1",ruta: "./model/cam/Cam1.gltf"},
    {id: 1, text3: "camara 2",ruta: "./model/cam/cam2.gltf"},
    {id: 2, text3: "camara 3",ruta: "./model/cam/cam3.gltf"}
];

array_camara.forEach(obj => {
    const $option3 = document.createElement("option");
    $option3.value = obj.id;
    $option3.innerHTML = obj.text3;
    camara.appendChild($option3);
});

objeto_base.forEach(obj => {
    const $option3 = document.createElement("option");
    $option3.value = obj.id;
    $option3.innerHTML = obj.text4;
    base.appendChild($option3);
});


array_helice.forEach(obj => {
    const $option2 = document.createElement("option");
    $option2.value = obj.id;
    $option2.innerHTML = obj.text2;
    helice.appendChild($option2);
});

array_motor.forEach(obj => {
    const $option = document.createElement("option");
    $option.value = obj.id;
    $option.innerHTML = obj.text;
    motor.appendChild($option);
});

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100);
scene.add(camera);
camera.position.set(0, 8, -10);
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
    base: new THREE.Group(),

};

motor.addEventListener("change", (event) => {
    const selectedMotor = array_motor.find((e) => e.id == event.target.value);
    if (selectedMotor) {
        loadModels(selectedMotor.ruta, droneParts.motor);
    }
    droneParts.motor.clear();

});

base.addEventListener("change", (event) => {
    const selectedbase = objeto_base.find((e) => e.id == event.target.value);
    if (selectedbase) {
        loadModels(selectedbase.ruta, droneParts.base);
    }
    droneParts.base.clear();

});

camara.addEventListener("change", (event) => {
    const selectedCamara = array_camara.find((e) => e.id == event.target.value);
    if (selectedCamara) {
        loadModels(selectedCamara.ruta, droneParts.camaras);
    }
    droneParts.camaras.clear();

});


helice.addEventListener("change", (event) => {
    loadModels(array_helice.find((e) => e.id == event.target.value).ruta, droneParts.helices, 'helice3');
    droneParts.helices.clear();

});

function loadModels(ruta, groupParts, name) {
    gltfLoader.load(ruta, function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.name = name;
            }
        });
        groupParts.add(gltf.scene);
    }, undefined, function (error) {
        console.error('Error al cargar el modelo:', error);
    });
}




loadModels(array_motor[0].ruta, droneParts.motor, 'motor1');
loadModels(array_helice[0].ruta, droneParts.helices, 'helice3');
loadModels(array_camara[0].ruta, droneParts.camaras, 'cam1');
loadModels(objeto_base[0].ruta, droneParts.base, 'base');


scene.add(droneParts.base);
scene.add(droneParts.camaras);
scene.add(droneParts.motor);
scene.add(droneParts.helices);
scene.add(droneParts.base);
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
light1.shadow.mapSize.set(2080, 2048);
light1.shadow.bias = -0.000131;
scene.add(light1);

const al = new THREE.AmbientLight(0x208080, 0.61);
scene.add(al);

const clock = new THREE.Clock();

// velocidad y la dirección del dron
const moveSpeed = 0.1;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

// detectar cuando se presiona una tecla
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.code === "KeyW") {
        movingUp = true;
    } else if (e.key === "ArrowDown" || e.code === "KeyS") {
        movingDown = true;
    } else if (e.key === "ArrowLeft" || e.code === "KeyA") {
        movingLeft = true;
    } else if (e.key === "ArrowRight" || e.code === "KeyD") {
        movingRight = true;
    } 
});

// E detectar cuando se suelta una tecla
window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp" || e.code === "KeyW") {
        movingUp = false;
    } else if (e.key === "ArrowDown" || e.code === "KeyS") {
        movingDown = false;
    } else if (e.key === "ArrowLeft" || e.code === "KeyA") {
        movingLeft = false;
    } else if (e.key === "ArrowRight" || e.code === "KeyD") {
        movingRight = false;
    } 
});

const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    if (movingUp) {
        // Subir el dron 
        droneParts.base.position.y += moveSpeed;
        droneParts.camaras.position.y += moveSpeed;
        droneParts.motor.position.y += moveSpeed;
        droneParts.helices.position.y += moveSpeed;
    }

    if (movingDown) {
        // Bajar el dron 
        droneParts.base.position.y -= moveSpeed;
        droneParts.camaras.position.y -= moveSpeed;
        droneParts.motor.position.y -= moveSpeed;
        droneParts.helices.position.y -= moveSpeed;
    }

    if (movingLeft) {
        // Mover el dron a la izquierda
        droneParts.base.position.x += moveSpeed;
        droneParts.camaras.position.x += moveSpeed;
        droneParts.motor.position.x += moveSpeed;
        droneParts.helices.position.x += moveSpeed;
    }

    if (movingRight) {
        // Mover el dron a la derecha 
        droneParts.base.position.x -= moveSpeed;
        droneParts.camaras.position.x -= moveSpeed;
        droneParts.motor.position.x -= moveSpeed;
        droneParts.helices.position.x -= moveSpeed;
    }

    // Rotar la hélice
    droneParts.helices.traverse((child) => {
        if (child.name === 'helice3') {
            child.rotation.y += 0.3; 
        }
    });

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();
