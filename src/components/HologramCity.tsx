import React, { JSX, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface HologramCityProps {
  position?: [number, number, number];
}

const HologramCity: React.FC<HologramCityProps> = ({ position = [0, -2, 0] }) => {
  const groupRef = useRef<THREE.Group>(null!);

  const gridSize = 10;
  const spacing = 3; // More space to accommodate roads
  const buildingMeshes: JSX.Element[] = [];
  const roadMeshes: JSX.Element[] = [];

  // Random building shape generator
  const buildingShapes = ["box", "cylinder", "octahedron"]; // some shape variety

  // Create roads
  // We'll place roads along i=0 and j=0, etc., forming a grid
  for (let i = -gridSize; i <= gridSize; i++) {
    // Vertical roads (z-axis)
    roadMeshes.push(
      <mesh
        key={`road-vert-${i}`}
        position={[i * spacing, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        {/* A thin plane for the road */}
        <planeGeometry args={[spacing, gridSize * spacing * 2]} />
        <meshStandardMaterial
          color="#111"
          emissive="#00ffff"
          emissiveIntensity={0.02}
          transparent
          opacity={0.8}
        />
      </mesh>
    );
    // Horizontal roads (x-axis)
    roadMeshes.push(
      <mesh
        key={`road-horiz-${i}`}
        position={[0, 0.01, i * spacing]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[gridSize * spacing * 2, spacing]} />
        <meshStandardMaterial
          color="#111"
          emissive="#00ffff"
          emissiveIntensity={0.02}
          transparent
          opacity={0.8}
        />
      </mesh>
    );
  }

  // Create buildings
  for (let i = -gridSize; i <= gridSize; i++) {
    for (let j = -gridSize; j <= gridSize; j++) {
      // Skip spots near roads to form city blocks
      if (i % 2 === 0 || j % 2 === 0) continue;

      const shapeType = buildingShapes[Math.floor(Math.random() * buildingShapes.length)];
      const floors = Math.floor(Math.random() * 4) + 3; // 3-6 floors
      let currentHeight = 0;
      const buildingGroup: JSX.Element[] = [];

      for (let f = 0; f < floors; f++) {
        const floorHeight = Math.random() * 2 + 2;
        const colorOptions = ["#00ffff", "#0ff0ff", "#00f0f0"];
        const buildingColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];

        // Decide geometry
        let geometry;
        if (shapeType === "box") {
          geometry = <boxGeometry args={[2, floorHeight, 2]} />;
        } else if (shapeType === "cylinder") {
          geometry = <cylinderGeometry args={[1, 1, floorHeight, 8]} />;
        } else {
          // Octahedron
          geometry = <octahedronGeometry args={[1.2, 0]} />;
        }

        // Main building floor
        buildingGroup.push(
          <mesh
            key={`floor-${f}`}
            position={[0, currentHeight + floorHeight / 2, 0]}
            castShadow
          >
            {geometry}
            <meshStandardMaterial
              color={buildingColor}
              transparent
              opacity={0.8}
              emissive={buildingColor}
              emissiveIntensity={0.2}
            />
          </mesh>
        );

        currentHeight += floorHeight;

        // Random spire or antenna on top of the last floor
        if (f === floors - 1 && Math.random() > 0.5) {
          const spireHeight = Math.random() * 3 + 1;
          buildingGroup.push(
            <mesh
              key="spire"
              position={[0, currentHeight + spireHeight / 2, 0]}
            >
              <cylinderGeometry args={[0.2, 0.2, spireHeight, 6]} />
              <meshStandardMaterial
                color="#a0fff0"
                emissive="#a0fff0"
                emissiveIntensity={0.5}
              />
            </mesh>
          );
          currentHeight += spireHeight;
        }

        // Add random window stripes
        const stripes = Math.floor(Math.random() * 3) + 1;
        for (let s = 0; s < stripes; s++) {
          const stripeHeight = 0.05;
          const stripeY =
            currentHeight - floorHeight + Math.random() * floorHeight;
          const stripeWidth = 1.8;
          const stripeDepth = 0.05;
          const stripeColor = "#a0fff0";

          // Random side (front/back or left/right)
          // We'll just do front/back for simplicity
          const offsetZ = Math.random() > 0.5 ? 1.05 : -1.05;

          if (shapeType === "cylinder" || shapeType === "octahedron") {
            // Skipping stripes for round shapes or we can do partial
            continue;
          }

          buildingGroup.push(
            <mesh
              key={`stripe-${f}-${s}`}
              position={[0, stripeY, offsetZ]}
            >
              <boxGeometry args={[stripeWidth, stripeHeight, stripeDepth]} />
              <meshStandardMaterial
                color={stripeColor}
                emissive={stripeColor}
                emissiveIntensity={0.6}
              />
            </mesh>
          );
        }
      }

      // Put all floors in a group
      buildingMeshes.push(
        <group
          key={`building-${i}-${j}`}
          position={[i * spacing, 0, j * spacing]}
        >
          {buildingGroup}
        </group>
      );
    }
  }

  // Slowly rotate the city
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Roads */}
      {roadMeshes}
      {/* Buildings */}
      {buildingMeshes}
    </group>
  );
};

export default HologramCity;
