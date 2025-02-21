// src/components/SceneManager.tsx
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HologramCity from "./HologramCity";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const RotatingRing: React.FC = () => {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.0007;
      ringRef.current.rotation.x += 0.0004;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[12, 0.2, 32, 100]} />
      <meshStandardMaterial color="#f0c040" wireframe />
    </mesh>
  );
};

const SceneContents: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    // We'll move the camera from z=10 at top to z=25 at bottom
    // as user scrolls from #scroll-container top to bottom.
    gsap.to(camera.position, {
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true, // Uncomment for debug
      },
      x: 0,
      y: 0,
      z: 25, // Final zoom out
      ease: "none",
    });
  }, [camera]);

  return (
    <>
      <Stars radius={80} depth={50} count={2000} factor={4} saturation={0} fade />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <RotatingRing />
      <HologramCity position={[0, -2, 0]} />
      <EffectComposer>
        <Bloom intensity={0.4} />
      </EffectComposer>
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const SceneManager: React.FC = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <SceneContents />
    </Canvas>
  );
};

export default SceneManager;
