import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";

const HaloRing: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.0007;
      ringRef.current.rotation.x += 0.0004;
    }
  });

  return (
    <mesh ref={ringRef} position={position}>
      {/* A large torus to resemble a Halo ring */}
      <torusGeometry args={[5, 0.2, 32, 100]} />
      <meshStandardMaterial color="#0f0" wireframe />
    </mesh>
  );
};

const FloatingObject: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const objRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (objRef.current) {
      objRef.current.rotation.x += 0.005;
      objRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={objRef} position={position}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial color="#ffeb3b" wireframe />
    </mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%"
      }}
      camera={{ position: [0, 0, 12], fov: 60 }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade />
      <HaloRing position={[0, 0, 0]} />
      <FloatingObject position={[2, 2, 0]} />
      <FloatingObject position={[-2, -3, 1]} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Scene;
