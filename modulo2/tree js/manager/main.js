const manager = new THREE.LoadingManager();
manager.onStart = function (url, itemsLoaded, itemsTotal) {
    console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
};

manager.onLoad = function () {
    console.log('Loading complete!');
};

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');
};

manager.onError = function (url) {
    console.log('There was an error loading ' + url);
};

const loader = new OBJLoader(manager);
loader.load('file.obj', function (object) {
    //
});

const blobs = { 'fish.gltf': blob1, 'diffuse.png': blob2, 'normal.png': blob3 };

const manager = new THREE.LoadingManager();

// Initialize loading manager with URL callback.
const objectURLs = [];
manager.setURLModifier((url) => {

    url = URL.createObjectURL(blobs[url]);
    objectURLs.push(url);
    return url;

});

// Load as usual, then revoke the blob URLs.
const loader1 = new GLTFLoader(manager);
loader.load('fish.gltf', (gltf) => {

    scene.add(gltf.scene);
    objectURLs.forEach((url) => URL.revokeObjectURL(url));

});