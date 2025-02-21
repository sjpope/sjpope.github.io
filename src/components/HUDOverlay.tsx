import React from "react";
import styled, { keyframes } from "styled-components";

const scan = keyframes`
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
`;

const ScanningLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${scan} 4s linear infinite;
  transform: translateX(-50%);
`;

const HUDOverlay: React.FC = () => {
  return (
    <HUDContainer>
      <ScanningLine />
      {/* Add corner elements, text readouts, or additional lines */}
    </HUDContainer>
  );
};

export default HUDOverlay;
