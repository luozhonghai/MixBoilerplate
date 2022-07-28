import * as THREE from 'three';
import {Sky} from "./example/Sky";
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 5000 );

//from nunu studio for test
const sky = new Sky();
scene.add(sky);
///////////////////////////

function animate() {
  requestAnimationFrame( animate );

  renderer.render( scene, camera );
};

animate();
