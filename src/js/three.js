import * as THREE from '../lib/threejs/build/three.module.js';
// import { DDSLoader } from "../lib/threejs/examples/jsm/loaders/DDSLoader.js";
// import { DRACOLoader } from "../lib/threejs/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "../lib/threejs/examples/jsm/loaders/GLTFLoader.js";
global.THREE = THREE;
// global.DDSLoader = new DDSLoader();
// global.DRACOLoader = new DRACOLoader();
global.GLTFLoader = new GLTFLoader();

function buildScene(gltf) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.add(gltf.scene);

    // camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}

global.buildScene = buildScene;
global.gltf = new GLTFLoader();
global.gltf.load('https://localhost:5001/content/portfolio/gltf/irifle.gltf', (gltf) => { window.gl = gltf; }, () => { }, () => { });