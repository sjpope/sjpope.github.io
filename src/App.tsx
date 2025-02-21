import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Terminal from "./components/Terminal";
import Scene from "./components/Scene";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 30%;
  min-width: 300px;
  background: rgba(0, 0, 0, 0.85);
  border-right: 2px solid #333;
  padding: 20px;
  z-index: 2;
  overflow-y: auto;
`;

const ContentSections = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
  padding: 40px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const App: React.FC = () => {
  const [terminalVisible, setTerminalVisible] = useState(true);

  return (
    <Container>
      <Header />
      <MainContent>
        <Sidebar>
          {terminalVisible && <Terminal />}
          <button
            style={{
              background: "#111",
              border: "1px solid #0f0",
              color: "#0f0",
              padding: "8px 12px",
              cursor: "pointer",
              marginTop: "20px",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "10px"
            }}
            onClick={() => setTerminalVisible((prev) => !prev)}
          >
            Toggle Terminal
          </button>
        </Sidebar>
        <ContentSections>
          <Section id="about">
            <About />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
        </ContentSections>
        <Scene />
      </MainContent>
      <Footer />
    </Container>
  );
};

export default App;
