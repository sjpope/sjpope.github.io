// src/sections/WorkSection.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0f0;
  text-shadow: 0 0 6px #0f0;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #fff;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled.div`
  border: 2px solid #0f0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, border-color 0.3s;
  &:hover {
    transform: scale(1.02);
    border-color: #fff;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.4;
  }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const WorkSection: React.FC = () => {
  return (
    <Container
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <Title>My Work</Title>
      <Subtitle>Projects that push the boundaries of immersive technology</Subtitle>
      <ProjectsGrid>
        <ProjectCard>
          <h3>Project A</h3>
          <p>
            A futuristic AR app that merges real-world objects with 3D holograms.
            Experience an augmented environment that feels like stepping into the future.
          </p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project B</h3>
          <p>
            A VR environment for immersive data visualization in real-time.
            Dive into interactive dashboards and manipulate complex data with intuitive gestures.
          </p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project C</h3>
          <p>
            An AI-driven code assistant that suggests VR/AR interactions in real-time,
            enabling rapid prototyping of next-gen user experiences.
          </p>
        </ProjectCard>
      </ProjectsGrid>
    </Container>
  );
};

export default WorkSection;
