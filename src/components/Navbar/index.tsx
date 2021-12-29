import React, { FC, useState } from 'react';
import { NavBarContainer, NavItem } from './styled';
import { FiChrome, FiHome, FiTwitch, FiTwitter } from 'react-icons/fi';

interface INavBarProps {
  expanded: boolean;
  onExpanded: () => void;
}
export const NavBar: FC<INavBarProps> = ({ expanded, onExpanded }) => {
  return (
    <NavBarContainer expanded={expanded}>
      <NavItem>
        logo
        <FiChrome />
      </NavItem>
      <NavItem>
        <FiHome />
      </NavItem>
      <NavItem>
        <FiTwitch />
      </NavItem>
      <NavItem>
        <FiTwitter />
      </NavItem>
      <div>
        <button onClick={onExpanded}>Click</button>
      </div>
    </NavBarContainer>
  );
};
