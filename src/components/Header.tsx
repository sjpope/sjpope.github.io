import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/variants";

const HeaderContainer = styled(motion.header)`
  background: #111;
  padding: 15px 20px;
  border-bottom: 2px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  position: relative;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  li a {
    position: relative;
    text-decoration: none;
    color: #0f0;
    transition: color 0.3s;
    font-family: 'Exo 2', sans-serif;

    &:hover {
      color: #fff;
    }
    &:hover::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #0f0;
      animation: neon-glow 0.5s alternate infinite;
    }
  }

  @keyframes neon-glow {
    from { box-shadow: 0 0 4px #0f0; }
    to { box-shadow: 0 0 12px #0f0; }
  }
`;

const Title = styled.h1`
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  color: #0f0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <Title>SJ Pope Portfolio</Title>
      <nav>
        <NavList>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
