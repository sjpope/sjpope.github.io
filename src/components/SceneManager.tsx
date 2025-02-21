import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkullModel from "./SkullModel";
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
      <torusGeometry args={[6, 0.1, 32, 100]} />
      <meshStandardMaterial color="#f0c040" wireframe />
    </mesh>
  );
};

const SceneContents: React.FC = () => {
  const { camera } = useThree();
  const skullRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // GSAP + ScrollTrigger logic
    // We'll pin the canvas in the background while we scroll sections
    gsap.to(camera.position, {
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      x: 10,
      y: 5,
      z: 15,
      ease: "power1.inOut"
    });

    // Optionally rotate the skull model or do a parallax effect
    if (skullRef.current) {
      gsap.to(skullRef.current.rotation, {
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        },
        y: 2 * Math.PI // 360 spin
      });
    }
  }, [camera]);

  return (
    <>
      <Stars
        radius={80}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
      />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.9} />
      <RotatingRing />
      <group ref={skullRef} position={[0, -2, 0]}>
        <SkullModel scale={2} />
      </group>
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
        height: "100%"
      }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <SceneContents />
    </Canvas>
  );
};

export default SceneManager;
