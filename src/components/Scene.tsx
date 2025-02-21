import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";
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
      <torusGeometry args={[5, 0.2, 32, 100]} />
      <meshStandardMaterial color="#fafad2" wireframe />
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
      <meshStandardMaterial color="#c0c0c0" wireframe />
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
      <EffectComposer>
        <Bloom intensity={0.3} />
        <Glitch 
          delay={new THREE.Vector2(1.5, 3.5)} 
          duration={new THREE.Vector2(0.1, 0.3)} 
        />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
