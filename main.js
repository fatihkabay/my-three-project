import * as THREE from "three"

const scene = new THREE.Scene()

const geometry = new THREE.SphereGeometry( 3, 64, 64 )
const material = new THREE.MeshStandardMaterial({
     color: "00ff83",

})

const mesh = new THREE.Mesh( geometry, material )
scene.add( mesh )