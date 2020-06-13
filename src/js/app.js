// import UIKit from "./uikit/js/uikit.js";
// import ICONS from "./uikit/js/uikit-icons.js";
import "animejs";
import "./util/dynamic-loader.js";

function buildScene() {
    DynamicLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.min.js');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x161616 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}

global.buildScene = buildScene;



