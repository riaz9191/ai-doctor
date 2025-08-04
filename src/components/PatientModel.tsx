'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

export default function PatientModel() {
  return (
    <Canvas style={{ background: '#f0f0f0' }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[2, 32, 32]}>
        <meshStandardMaterial color="royalblue" />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}