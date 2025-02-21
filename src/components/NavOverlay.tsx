// src/components/NavOverlay.tsx
import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

const NavButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #0f0;
  color: #0f0;
  font-family: "Orbitron", sans-serif;
  font-size: 0.9rem;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 5px #0f0);
  }
`;

interface NavOverlayProps {}

const NavOverlay: React.FC<NavOverlayProps> = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavContainer>
      <NavButton onClick={() => handleScrollTo("intro")}>Intro</NavButton>
      <NavButton onClick={() => handleScrollTo("about")}>About</NavButton>
      <NavButton onClick={() => handleScrollTo("work")}>Work</NavButton>
      <NavButton onClick={() => handleScrollTo("charts")}>Charts</NavButton>
      <NavButton onClick={() => handleScrollTo("contact")}>Contact</NavButton>
    </NavContainer>
  );
};

export default NavOverlay;
