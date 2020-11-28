import React from 'react';
import { SunIcon } from './sun';
import { MoonIcon } from './moon';
import { Theme, lightTheme } from '../../styles/theme';
import styled from 'styled-components';

const ToggleContainer = styled.button<{ isLight: boolean, theme: Theme }>`
  background: ${({ theme }: { theme: Theme }) => theme.gradient};
  border: 1px dotted ${({ theme }: { theme: Theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 3rem;
  height: 2rem;
  align-self: center;
  align-content: end; 

  svg {
    height: auto;
    width: 1.4rem;
    max-width: 2.5rem;
    transition: all 0.2s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ isLight }) => isLight ? 'translateY(-3px)' : 'translateY(70px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ isLight }) => isLight ? 'translateY(-80px)' : 'translateY(-30px)'};
    }
  }

  :focus {
    outline: none;
  }
`;

export const Toggle = function ({ theme, toggleTheme }: { theme: Theme; toggleTheme: (() => void); }) {
  const isLight = theme === lightTheme;
  return (
    <ToggleContainer isLight={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};