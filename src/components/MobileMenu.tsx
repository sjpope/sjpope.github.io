import React from "react";
import styled from "styled-components";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

// Use a transient prop ($open) so that it isn't forwarded to the DOM.
const MenuWrapper = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  border-left: 2px solid #333;
  transform: translateX(${(props) => (props.$open ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: #111;
  border: 1px solid #0f0;
  color: #0f0;
  padding: 8px 12px;
  cursor: pointer;
  font-family: "Press Start 2P", monospace;
  font-size: 10px;
  margin-bottom: 20px;
`;

const NavItem = styled.a`
  color: #0f0;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 16px;
  &:hover {
    filter: drop-shadow(0 0 6px #0f0);
  }
`;

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, children }) => {
  return (
    <MenuWrapper $open={open}>
      <CloseButton onClick={onClose}>Close</CloseButton>
      {children}
    </MenuWrapper>
  );
};

export default MobileMenu;
