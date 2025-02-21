import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background: transparent; /* Let the 3D scene show through */
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
    <Container>
      <Title>About Me</Title>
      <Text>
        I’m a developer who loves to push boundaries and create futuristic
        digital experiences. My passion lies in blending advanced 3D visuals,
        interactive UI, and cutting-edge technologies to produce immersive,
        game-like interfaces.
      </Text>
    </Container>
  );
};

export default AboutSection;
