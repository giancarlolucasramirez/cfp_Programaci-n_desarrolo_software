
const motor = document.getElementById("motor")
const helice = document.getElementById("helice")
const camara = document.getElementById("camara")


const values = [
    {id:1, text:"motor 1",ruta:"./model/motor/Motor1.gltf"},
    {id:2, text:"motor 2",ruta:"./model/motor/Motor2.gltf"},
    {id:3, text:"motor 3",ruta:"./model/motor/Motor3.gltf"},
    
]
const values2 = [
    {id2:0, text2:"helice 1"},
    {id2:1, text2:"helice 2"},
    {id2:2, text2:"helice 3"},
    
]

const values3 = [
    {id3:0, text3:"camara 1"},
    {id3:1, text3:"camara 2"},
    {id3:2, text3:"camara 3"},
    
]

values3.forEach(obj => {
    const $option3 = document.createElement("option")
    $option3.value = obj.id3
    $option3.innerHTML = obj.text3
    camara.appendChild($option3)
})


values2.forEach(obj => {
    const $option2 = document.createElement("option")
    $option2.value = obj.id2
    $option2.innerHTML = obj.text2
    helice.appendChild($option2)
})


values.forEach(obj => {
    const $option = document.createElement("option")
    $option.value = obj.id
    $option.innerHTML = obj.text
    motor.appendChild($option)
})

    
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
scene.add(camera);
camera.position.set(-5, 5, 10);
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

motor.addEventListener("change", (event) => {
    console.log(event.target.value);
    console.log(values.find((e) => e.id == event.target.value).ruta);
    loadModels(values.find((e) => e.id == event.target.value).ruta, droneParts.motor)  
    groupParts.remove(gltf.scene);

});

function loadModels(ruta, groupParts) {
    gltfLoader.load(ruta, function (gltf) {
        groupParts.add(gltf.scene);
    }, undefined, function (error) {
        console.error('Error al cargar el modelo Base:', error);
    });

}


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
loadModels(values[0].ruta,droneParts.motor)


// gltfLoader.load('./model/motor/Motor2.gltf', function (gltf) {
//     droneParts.motor.add(gltf.scene);
// }, undefined, function (error) {
//     console.error('Error al cargar el modelo Motor2:', error);
// });

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
        droneParts.base.position.x -= moveSpeed;
        droneParts.camaras.position.x -= moveSpeed;
        droneParts.motor.position.x -= moveSpeed;
        droneParts.helices.position.x -= moveSpeed;
    }

    if (movingRight) {
        // Mover el dron a la derecha 
        droneParts.base.position.x += moveSpeed;
        droneParts.camaras.position.x += moveSpeed;
        droneParts.motor.position.x += moveSpeed;
        droneParts.helices.position.x += moveSpeed;
    }

    const movement = Math.sin(elapsedTime);
    droneParts.helices.traverse(function (child) {
        if (child.name === 'helice1') {
            child.rotation.y += 0.4;
        }
    });

    orbitControls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();
