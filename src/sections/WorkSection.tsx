import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid #0f0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const WorkSection: React.FC = () => {
  return (
    <Container>
      <Title>My Work</Title>
      <ProjectsGrid>
        <ProjectCard>
          <h3>Project A</h3>
          <p>
            A futuristic AR app that merges real-world objects with 3D
            holograms.
          </p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project B</h3>
          <p>
            A VR environment for immersive data visualization in real-time.
          </p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project C</h3>
          <p>
            An AI-driven code assistant that suggests VR/AR interactions in
            real-time.
          </p>
        </ProjectCard>
      </ProjectsGrid>
    </Container>
  );
};

export default WorkSection;
