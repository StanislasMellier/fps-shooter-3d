import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const GAME_ASPECT_RATIO = 16 / 9

renderer.setPixelRatio(window.devicePixelRatio)

let canvasWidth = window.innerWidth * 0.8
renderer.setSize(canvasWidth, canvasWidth / GAME_ASPECT_RATIO)

document.body.appendChild(renderer.domElement)

renderer.shadowMap.enabled = true

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.aspect = GAME_ASPECT_RATIO

camera.position.set(4, 4, 4)
const controls = new OrbitControls(camera, renderer.domElement)

window.addEventListener('resize', () => {
    let canvasWidth = window.innerWidth * 0.8
    renderer.setSize(canvasWidth, canvasWidth / GAME_ASPECT_RATIO)
    camera.updateProjectionMatrix()
})

renderer.render(scene, camera)

class game {
    constructor() {
        this.renderer = new THREE.WebGLRenderer()

    }
}