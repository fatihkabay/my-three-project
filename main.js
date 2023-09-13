import * as THREE from 'three';

import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';


const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

//renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//sphere geomtry
const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true;
sphere.receiveShadow = false;
scene.add( sphere );


//plane geometry
const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
const planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

//controls

const controls = new ArcballControls( camera, renderer.domElement, scene );

controls.addEventListener( 'change', function () {

	renderer.render( scene, camera );

} );

camera.position.set( 0, 20, 100 );
controls.update();

//light
const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 0 );
light.castShadow = true;
scene.add( light );

light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;


//helper
const helper = new THREE.AxesHelper( 5 );
scene.add( helper );

function animate() {
	requestAnimationFrame( animate );

	plane.rotation.x += 0.06;
    plane.rotation.y += 0.06;

	renderer.render( scene, camera );
}

animate();
