import React from "react";
import styled from "styled-components";

const IntroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

interface IntroSectionProps {
  enableAudio: () => void;
  audioEnabled: boolean;
}

const IntroSection: React.FC<IntroSectionProps> = ({ enableAudio, audioEnabled }) => {
  return (
    <IntroContainer>
      <h1>CYBERTRON PORTFOLIO</h1>
      <p>A futuristic experience showcasing my digital creations.</p>
      {!audioEnabled && (
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#444",
            color: "#fff",
            border: "1px solid #0f0",
            cursor: "pointer",
            fontFamily: "'Orbitron', sans-serif"
          }}
          onClick={enableAudio}
        >
          Touch anywhere to start sound
        </button>
      )}
    </IntroContainer>
  );
};

export default IntroSection;
