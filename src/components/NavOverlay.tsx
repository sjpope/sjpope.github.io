// src/components/NavOverlay.tsx
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% { box-shadow: 0 0 5px #0f0; }
  50% { box-shadow: 0 0 20px #0f0; }
  100% { box-shadow: 0 0 5px #0f0; }
`;

const MenuIcon = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(0,0,0,0.4);
  border: 2px solid #0f0;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    animation: ${glow} 1.5s infinite alternate;
  }

  &:before {
    content: "≡";
    color: #0f0;
    font-size: 1.2rem;
  }
`;

const SlideOutMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  border-left: 2px solid #0f0;
  transform: translateX(${(p) => (p.open ? "0" : "100%")});
  transition: transform 0.5s ease;
  z-index: 998;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  gap: 20px;
`;

const NavButton = styled.button`
  background: transparent;
  border: 2px solid #0f0;
  color: #0f0;
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    animation: ${glow} 1.5s infinite alternate;
  }
`;

interface NavOverlayProps {}

const NavOverlay: React.FC<NavOverlayProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <MenuIcon onClick={() => setMenuOpen((prev) => !prev)} />
      <SlideOutMenu open={menuOpen}>
        <NavButton onClick={() => handleScrollTo("intro")}>Intro</NavButton>
        <NavButton onClick={() => handleScrollTo("about")}>About</NavButton>
        <NavButton onClick={() => handleScrollTo("work")}>Work</NavButton>
        <NavButton onClick={() => handleScrollTo("charts")}>Charts</NavButton>
        <NavButton onClick={() => handleScrollTo("contact")}>Contact</NavButton>
      </SlideOutMenu>
    </>
  );
};

export default NavOverlay;
