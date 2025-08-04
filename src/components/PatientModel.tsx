
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

export default function PatientModel() {
  const { scene } = useGLTF('/scene.gltf')
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  )
}
