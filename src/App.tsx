// src/App.tsx
import React from "react";
import GlobalStyle from "./globalStyles";
import { useSoundEffects } from "./hooks/useSoundEffects";
import CustomCursor from "./components/CustomCursor";
import HUDOverlay from "./components/HUDOverlay";
import SceneManager from "./components/SceneManager";
import NavOverlay from "./components/NavOverlay";

// Sections
import IntroSection from "./sections/IntroSection";
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import ChartsSection from "./sections/ChartsSection";
import ContactSection from "./sections/ContactSection";

const App: React.FC = () => {
  const { audioEnabled, enableAudio } = useSoundEffects();

  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <SceneManager />
      <HUDOverlay />
      <NavOverlay />

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
