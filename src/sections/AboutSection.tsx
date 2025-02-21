import React from "react";
import styled from "styled-components";


const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Text = styled.p`
  max-width: 800px;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const AboutSection: React.FC = () => {
  return (
    <Container id="about">
      <h1>About Me</h1>
      <p>
        I’m a developer who loves to push boundaries and create futuristic
        digital experiences. My passion lies in blending advanced 3D visuals,
        interactive UI, and cutting-edge technologies to produce immersive,
        game-like interfaces.
      </p>
    </Container>
  );
};

export default AboutSection;
