// src/components/HologramCity.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface HologramCityProps {
  position?: [number, number, number];
}

const HologramCity: React.FC<HologramCityProps> = ({ position = [0, -2, 0] }) => {
  const groupRef = useRef<THREE.Group>(null!);

  // Create a grid of "towers" to simulate a city.
  const towers = [];
  const gridSize = 8;
  const spacing = 1.8;

  for (let i = -gridSize; i <= gridSize; i++) {
    for (let j = -gridSize; j <= gridSize; j++) {
      const height = Math.random() * 6 + 1;
      const width = Math.random() * 0.6 + 0.4;
      const depth = Math.random() * 0.6 + 0.4;
      const colorOptions = ["#00ffff", "#0ff0ff", "#00f0f0"];
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];

      towers.push(
        <mesh
          key={`${i}-${j}`}
          position={[i * spacing, height / 2, j * spacing]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[width, height, depth]} />
          <meshStandardMaterial
            color={color}
            transparent={true}
            opacity={0.7}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
      );
    }
  }

  // Slowly rotate the city for a dynamic effect.
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return <group ref={groupRef} position={position}>{towers}</group>;
};

export default HologramCity;
