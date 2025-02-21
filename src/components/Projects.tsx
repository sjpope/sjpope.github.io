import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  color: #0f0;
  font-family: 'Roboto Mono', monospace;
`;

const ProjectCard = styled.div`
  border: 1px solid #0f0;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.7);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: "VisionScript",
      description: "A project that pushes the boundaries of scripting and computer vision.",
      url: "https://github.com/sjpope/VisionScript"
    },
    {
      title: "FlowNote",
      description: "An innovative tool combining note-taking with workflow automation.",
      url: "https://github.com/sjpope/FlowNote"
    },
    {
      title: "MetricsMonitor-Mini",
      description:
        "Lightweight Linux system monitoring tool that collects CPU, memory, disk, and network metrics and sends them to an Azure Log Analytics Workspace.",
      url: "https://github.com/sjpope/MetricsMonitor-Mini"
    },
    {
      title: "CompNetworks",
      description:
        "TCP/UDP sockets demonstration using Python in a client/server architecture model.",
      url: "https://github.com/sjpope/CompNetworks"
    }
  ];

  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{proj.title}</ProjectTitle>
          <p>{proj.description}</p>
          <a href={proj.url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
