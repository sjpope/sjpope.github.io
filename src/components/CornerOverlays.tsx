import React from "react";
import styled, { keyframes } from "styled-components";

const scan = keyframes`
  0% { stroke-dashoffset: 200; }
  100% { stroke-dashoffset: 0; }
`;

const OverlayContainer = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const AnimatedLine = styled.path`
  stroke: #ccc; 
  fill: transparent;
  stroke-width: 2;
  stroke-dasharray: 200;
  animation: ${scan} 3s linear infinite;
`;

const CornerOverlays: React.FC = () => {
  return (
    <OverlayContainer>
      <svg width="100%" height="100%">
        <AnimatedLine d="M 50 50 L 200 50 L 200 200" />
        {/* Add more lines or shapes */}
      </svg>
    </OverlayContainer>
  );
};

export default CornerOverlays;
