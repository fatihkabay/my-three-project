import * as THREE from 'three';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

//renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geomtry
const boxGeometry = new THREE.BoxGeometry( 3, 3, 3 )
const boxMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: false } );
const box = new THREE.Mesh( boxGeometry, boxMaterial );
box.castShadow = true;
box.receiveShadow = false;
scene.add( box );

//plane geometry
const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
const planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

//orbit
const orbit = new OrbitControls(camera, renderer.domElement)

//light
const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 0 );
light.castShadow = true;
scene.add( light );

//helper
const helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );

function animate() {
	requestAnimationFrame( animate );

	box.rotation.x += 0.01;
	box.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
