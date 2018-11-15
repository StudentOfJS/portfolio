import * as React from 'react';
import styled, { ThemeInterface } from '../../theme';

export interface ButtonProps {
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

const BaseButton = styled(NonStyledBtn)`
  background: transparent;
  font-size: 1em;
  font-weight: 700;
  font-family: ${props => props.theme.fontFamily};
  margin: 5px;
  min-width: 110px;
  outline: none;
  padding: 4px 15px;
`;

export default styled(BaseButton)`
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  transition: transform 800ms ease-in-out;
  @media print {
    display: none;
  }
  &:hover {
    transition: transform 800ms ease-in-out;
    border: 2px solid orange;
    cursor: pointer;
    color: orange;
  }
`;

export const SelectedBtn = styled(BaseButton)`
  border: 2px solid orange;
  border-radius: 5px;
  color: orange;
`;
