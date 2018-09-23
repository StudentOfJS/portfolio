import * as React from 'react';
import styled, { ThemeInterface } from '../../../../theme';

interface ButtonProps {
  className?: string;
  type?: string;
  theme: ThemeInterface;
  disabled?: boolean;
  onClick?: () => void;
  name?: string;
}

export const NonStyledBtn: React.SFC<ButtonProps> = props => (
  <button
    type={props.type}
    className={props.className}
    disabled={props.disabled}
    onClick={props.onClick}
    name={props.name}
  >
    {props.children}
  </button>
);

export default styled(NonStyledBtn)`
  background: transparent;
  color: white;
  font-size: 1.2em;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily};
  border: 2px solid white;
  border-radius: 5px;
  margin: 20px 0 0 0;
  outline: none;
  padding: 10px;
  transition: transform 800ms ease-in-out;
  @media print {
    display: none;
  }
  &:hover {
    transition: transform 800ms ease-in-out;
    cursor: pointer;
    background: white;
    color: darkgrey;
  }
`;

export const SelectedBtn = styled(NonStyledBtn)`
  background: white;
  border: 2px solid white;
  border-radius: 5px;
  color: darkgrey;
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.2em;
  font-weight: 700;
  margin: 20px 0 0 0;
  outline: none;
  padding: 10px;
`;
