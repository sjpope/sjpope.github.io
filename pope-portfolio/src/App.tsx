import React, { useState } from 'react';
import Terminal from './Terminal';
import Scene from './Scene';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000;
    color: #0f0;
    font-family: 'Roboto Mono', monospace;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  width: 30%;
  background: #111;
  border-right: 2px solid #333;
  padding: 20px;
  overflow-y: auto;
`;

const Main = styled.div`
  flex: 1;
  position: relative;
`;

const Header = styled.header`
  background: #111;
  padding: 10px 20px;
  border-bottom: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
  }
  li a {
    color: #0f0;
    text-decoration: none;
  }
`;

const ToggleButton = styled.button`
  background: #222;
  color: #0f0;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  margin-top: 20px;
  &:hover {
    background: #333;
  }
`;

const App: React.FC = () => {
  const [terminalActive, setTerminalActive] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>sjpope Portfolio</h1>
          <Nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Nav>
        </Header>
        <ContentWrapper>
          <Sidebar>
            {terminalActive && <Terminal />}
            <ToggleButton onClick={() => setTerminalActive(prev => !prev)}>
              Toggle Terminal
            </ToggleButton>
          </Sidebar>
          <Main>
            <Scene />
          </Main>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default App;
