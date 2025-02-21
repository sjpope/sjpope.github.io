// src/sections/AboutSection.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0f0;
  text-shadow: 0 0 6px #0f0;
`;

const Text = styled.p`
  max-width: 800px;
  line-height: 1.6;
  font-size: 1.1rem;
  text-align: center;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AboutSection: React.FC = () => {
  return (
    <Container
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <Title>About Me</Title>
      <Text>
        I’m a developer who loves to push boundaries and create futuristic digital experiences. My passion
        lies in blending advanced 3D visuals, interactive UI, and cutting-edge technologies to produce immersive,
        game-like interfaces. I thrive on exploring new possibilities and crafting unique, out-of-this-world
        solutions for the modern era.
      </Text>
    </Container>
  );
};

export default AboutSection;
