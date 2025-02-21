// src/sections/IntroSection.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const IntroContainer = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0f0;
  text-shadow: 0 0 8px #0f0;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.4;
`;

const StartButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background: #111;
  color: #0f0;
  border: 2px solid #0f0;
  cursor: pointer;
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    filter: drop-shadow(0 0 6px #0f0);
  }
`;

interface IntroSectionProps {
  enableAudio: () => void;
  audioEnabled: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const IntroSection: React.FC<IntroSectionProps> = ({ enableAudio, audioEnabled }) => {
  return (
    <IntroContainer
      id="intro"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <Title>Sam J Pope - Portfolio</Title>
      <Subtitle>A futuristic experience showcasing my digital creations.</Subtitle>
      {!audioEnabled && (
        <StartButton onClick={enableAudio}>
          Scroll to navigate...
        </StartButton>
      )}
    </IntroContainer>
  );
};

export default IntroSection;
