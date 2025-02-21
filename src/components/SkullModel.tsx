import React from "react";
import { useGLTF } from "@react-three/drei";

interface SkullModelProps {
  position?: [number, number, number];
  scale?: number;
}

const SkullModel: React.FC<SkullModelProps> = ({ position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF("/skullModel.glb", true);

  return (
    <primitive
      object={scene}
      position={position}
      scale={scale}
      rotation={[0, Math.PI, 0]}
    />
  );
};

export default SkullModel;
