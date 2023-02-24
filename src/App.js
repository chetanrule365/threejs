import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

function App () {
  useEffect(() => {
    const scene = new THREE.Scene()
    // scene.background = new THREE.Color('grey')
    // const color = new THREE.Color('grey')
    // const blueColor = new THREE.Color('blue')
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    const controls = new OrbitControls(camera, renderer.domElement)
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({ roughness: 0.3 })
    const cube = new THREE.Mesh(geometry, material)
    cube.rotateY(0.75)
    cube.rotateX(0.75)
    scene.add(cube)

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(0, 0, 10)
    scene.add(light)

    camera.position.z = 5
    controls.update()
    function animate () {
      requestAnimationFrame(animate)
      cube.rotateX(0.01)
      cube.rotateY(0.01)
      cube.rotateZ(0.01)
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return (
    <div className="bg-white">

    </div>
  )
}

export default App
