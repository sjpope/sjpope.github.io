import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CursorDiv = styled.div<{ x: number; y: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid #fff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(${(p) => p.x}px, ${(p) => p.y}px);
  transition: transform 0.03s linear;
  z-index: 9999;
`;

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -50, y: -50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX - 16, y: e.clientY - 16 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <CursorDiv x={pos.x} y={pos.y} />;
};

export default CustomCursor;
