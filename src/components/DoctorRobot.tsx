import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function RobotModel() {
  const group = useRef(null);
  const { scene } = useGLTF('/doctor.glb');

  useFrame(() => {
    if (group.current) {
      // You can add animations or rotations here if needed
      // group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} dispose={null} scale={[2, 2, 2]} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function DoctorRobot() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 75 }} style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <RobotModel />
        <OrbitControls enableZoom={false} enablePan={false} target={[0, 0.5, 0]} />
      </Suspense>
    </Canvas>
  );
}
