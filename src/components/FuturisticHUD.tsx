import React from "react";
import styled, { keyframes } from "styled-components";

// Example scanning line animation
const scan = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
`;

const HUDContainer = styled.div`
  pointer-events: none; /* So it doesn't block clicks */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const ScanningLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 200%;
  background: rgba(15, 255, 15, 0.2);
  animation: ${scan} 3s linear infinite;
  transform: translateX(-50%);
`;

const CornerDeco = styled.div<{ top?: boolean; left?: boolean }>`
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid #0f0;
  ${({ top, left }) => `
    ${top ? "top: 0;" : "bottom: 0;"}
    ${left ? "left: 0;" : "right: 0;"}
    border-${top ? "top" : "bottom"}-color: transparent;
    border-${left ? "left" : "right"}-color: transparent;
  `}
`;

const FuturisticHUD: React.FC = () => {
  return (
    <HUDContainer>
      <ScanningLine />
      <CornerDeco top left />
      <CornerDeco top />
      <CornerDeco left />
      <CornerDeco />
    </HUDContainer>
  );
};

export default FuturisticHUD;
