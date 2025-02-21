import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HologramCity: React.FC<{ position?: [number, number, number] }> = ({ position = [0, -2, 0] }) => {
  const groupRef = useRef<THREE.Group>(null!);

  // Create a grid of "towers" to simulate a city.
  const towers = [];
  const gridSize = 5;
  const spacing = 2;
  for (let i = -gridSize; i <= gridSize; i++) {
    for (let j = -gridSize; j <= gridSize; j++) {
      const height = Math.random() * 4 + 1;
      towers.push(
        <mesh key={`${i}-${j}`} position={[i * spacing, height / 2, j * spacing]}>
          <boxGeometry args={[1, height, 1]} />
          <meshStandardMaterial
            color="#00ffff"
            transparent={true}
            opacity={0.7}
            emissive="#00ffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      );
    }
  }

  // Slowly rotate the city for a dynamic effect.
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {towers}
    </group>
  );
};

export default HologramCity;
