import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #111;
  padding: 10px 20px;
  text-align: center;
  border-top: 2px solid #333;
  color: #0f0;
  font-family: 'Roboto Mono', monospace;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} SJ Pope. All Rights Reserved.
    </FooterContainer>
  );
};

export default Footer;
