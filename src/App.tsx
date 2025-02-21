import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { useSoundEffects } from "./hooks/useSoundEffects";

import Header from "./components/Header";
import FuturisticHUD from "./components/FuturisticHUD";
import CornerOverlays from "./components/CornerOverlays";
import CustomCursor from "./components/CustomCursor";
import SceneManager from "./components/SceneManager"; // <-- NEW advanced scene
import Terminal from "./components/Terminal";
import About from "./components/About";    // Old approach or new
import Projects from "./components/Projects";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import GSAPDemo from "./components/GSAPDemo";

// Additional sections from the new approach
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import ContactSection from "./sections/ContactSection";

interface SidebarProps {
  open: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// For your desktop sidebar or mobile approach
const MainContent = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Sidebar = styled.div<SidebarProps>`
  width: 30%;
  min-width: 300px;
  background: rgba(0, 0, 0, 0.85);
  border-right: 2px solid #333;
  padding: 20px;
  z-index: 2;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    left: ${({ open }) => (open ? "0" : "-100%")};
    top: 0;
    bottom: 0;
    transition: left 0.3s ease;
  }
`;

const ContentSections = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
  padding: 40px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

// The big scroll container that GSAP will watch for camera transitions
const ScrollContainer = styled.div`
  position: relative;
  z-index: 5;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const ToggleSidebarButton = styled.button`
  background: #111;
  border: 1px solid #0f0;
  color: #0f0;
  padding: 8px 12px;
  cursor: pointer;
  margin-top: 20px;
  font-family: "Press Start 2P", monospace;
  font-size: 10px;
  &:hover {
    filter: drop-shadow(0 0 6px #0f0);
  }
`;

const App: React.FC = () => {
  const [terminalVisible, setTerminalVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { playBeep } = useSoundEffects();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleTerminal = () => {
    setTerminalVisible((prev) => !prev);
    playBeep();
  };

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    playBeep();
  };

  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <Container>
        <Header />
        <FuturisticHUD />
        <CornerOverlays />

        {/* The new advanced 3D scene with GSAP-based camera transitions */}
        <SceneManager />

        <MainContent>
          {/* MOBILE MENU */}
          {isMobile && (
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 3
              }}
            >
              <button
                style={{
                  background: "#111",
                  border: "1px solid #0f0",
                  color: "#0f0",
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "10px"
                }}
                onClick={handleToggleSidebar}
              >
                ☰
              </button>
            </div>
          )}

          {/* Render MobileMenu on mobile; otherwise the desktop sidebar */}
          {isMobile ? (
            <MobileMenu open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
              <a href="#old-about" onClick={() => setSidebarOpen(false)}>
                Old About
              </a>
              <a href="#projects" onClick={() => setSidebarOpen(false)}>
                Projects
              </a>
              <a href="#dashboard" onClick={() => setSidebarOpen(false)}>
                Dashboard
              </a>
            </MobileMenu>
          ) : (
            <Sidebar open={sidebarOpen}>
              {terminalVisible && <Terminal />}
              <ToggleSidebarButton onClick={handleToggleTerminal}>
                Toggle Terminal
              </ToggleSidebarButton>
              <ToggleSidebarButton
                onClick={() => {
                  setSidebarOpen(false);
                  playBeep();
                }}
              >
                Close Menu
              </ToggleSidebarButton>
            </Sidebar>
          )}

          {/* This container includes your old approach + new sections */}
          <ContentSections>
            <ScrollContainer id="scroll-container">
              {/* Old approach sections */}
              <Section id="old-about">
                <About />
              </Section>
              <Section id="projects">
                <Projects />
              </Section>
              <Section id="dashboard">
                <Dashboard />
              </Section>
              <Section id="gsap-demo">
                <GSAPDemo />
              </Section>

              {/* New approach sections */}
              <Section id="about">
                <AboutSection />
              </Section>
              <Section id="work">
                <WorkSection />
              </Section>
              <Section id="contact">
                <ContactSection />
              </Section>
            </ScrollContainer>
          </ContentSections>
        </MainContent>
        <Footer />
      </Container>
    </>
  );
};

export default App;
