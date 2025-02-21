import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  color: #0f0;
  font-family: 'Roboto Mono', monospace;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>
        I’m a software developer with a passion for low-level programming and computer wizardry.
        I love diving deep into system internals, creating interactive tools, and experimenting with
        modern UI techniques. Whether it’s building a dynamic terminal interface or crafting 3D visuals
        with WebGL, I strive to combine the raw power of command-line magic with the elegance of modern design.
      </p>
    </AboutContainer>
  );
};

export default About;
