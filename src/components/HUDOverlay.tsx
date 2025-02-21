// src/components/HUDOverlay.tsx
import React, { JSX, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const flicker = keyframes`
  0% { opacity: 0.9; }
  20% { opacity: 1; }
  40% { opacity: 0.7; }
  60% { opacity: 1; }
  80% { opacity: 0.85; }
  100% { opacity: 1; }
`;

const moveScan = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
`;

const HUDContainer = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  overflow: hidden;
`;

const ScanLine = styled.div`
  position: absolute;
  left: 50%;
  width: 2px;
  height: 200%;
  background: rgba(0, 255, 0, 0.2);
  animation: ${moveScan} 5s linear infinite;
  transform: translateX(-50%);
`;

const CornerFrame = styled.div<{ top?: boolean; left?: boolean }>`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid #0f0;
  animation: ${flicker} 3s infinite;
  ${({ top, left }) => `
    ${top ? "top: 0;" : "bottom: 0;"}
    ${left ? "left: 0;" : "right: 0;"}
    border-${top ? "top" : "bottom"}-color: transparent;
    border-${left ? "left" : "right"}-color: transparent;
  `}
`;

const RandomFlickerLine = styled.div`
  position: absolute;
  top: ${(p) => Math.random() * 80}%;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(0, 255, 0, 0.2);
  animation: ${moveScan} 2s linear infinite;
`;

const HUDOverlay: React.FC = () => {
  const [flickerLines, setFlickerLines] = useState<JSX.Element[]>([]);

  // Generate random horizontal flicker lines
  useEffect(() => {
    const lines: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      lines.push(<RandomFlickerLine key={i} />);
    }
    setFlickerLines(lines);
  }, []);

  return (
    <HUDContainer>
      <ScanLine />
      <CornerFrame top left />
      <CornerFrame top />
      <CornerFrame left />
      <CornerFrame />
      {flickerLines}
    </HUDContainer>
  );
};

export default HUDOverlay;
