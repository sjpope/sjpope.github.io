// src/App.tsx
import React from "react";
import GlobalStyle from "./globalStyles";
import { useSoundEffects } from "./hooks/useSoundEffects";
import CustomCursor from "./components/CustomCursor";
import HUDOverlay from "./components/HUDOverlay";
import SceneManager from "./components/SceneManager";

// Sections
import IntroSection from "./sections/IntroSection";
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import ContactSection from "./sections/ContactSection";
import ChartsSection from "./sections/ChartsSection";

const App: React.FC = () => {
  const { audioEnabled, enableAudio } = useSoundEffects();

  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <SceneManager />
      <HUDOverlay />

      {/* 
        This container must have multiple sections of at least 100vh 
        so the user can scroll from top to bottom, triggering camera moves.
      */}
      <div id="scroll-container" style={{ position: "relative", zIndex: 5 }}>
        <IntroSection audioEnabled={audioEnabled} enableAudio={enableAudio} />
        <AboutSection />
        <WorkSection />
        <ChartsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default App;
