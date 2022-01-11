import React, { FC, useState } from 'react';
import { NavBarContainer, NavItem } from './styled';
import { FiChrome, FiHome, FiTwitch, FiTwitter } from 'react-icons/fi';
import { CustomButton } from '../CustomButton';
import { INavBarProps } from '../../interfaces';

export const NavBar: FC<INavBarProps> = ({ expanded, onExpanded }) => {
  return (
    <NavBarContainer expanded={expanded}>
      logo
      <NavItem>
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
        <CustomButton onClick={onExpanded} text={'Expand'}></CustomButton>
      </div>
    </NavBarContainer>
  );
};
