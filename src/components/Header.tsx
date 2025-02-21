import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #111;
  padding: 15px 20px;
  border-bottom: 2px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "16px", color: "#0f0" }}>
        SJ Pope Portfolio
      </h1>
      <nav>
        <NavList>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
