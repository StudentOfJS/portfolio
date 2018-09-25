import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import styled, { keyframes } from '../../../theme';

const down = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    transform: translateY(8px);
  }
  80% {
    transform: translateY(6.4px);
  }
  90% {
    transform: translateY(-6.4px);
  }
`;

export const Move = styled(Link)`
  animation: ${down} 4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
  color: white;
  cursor: pointer;
  height: 100px;
  padding: 10px 5px;
  width: 100px;
  &:hover{
    color: orange;
  }
`;

export const Down = styled.div`
  align-items: center;
  bottom: 0;
  display: inline-flex;
  justify-content: center;
  padding: 10px;
  position: absolute;
  width: 100vw;
  z-index: 10;
  @media(max-width: 680px) {
    display: none;
  }
`;

interface DownButtonProps {
  location: string;
}

const DownButton: React.SFC<DownButtonProps> = ({ location }) => (
  <Down>
    <Move to={location}>
      <Icon name="angle double down" size="massive" />
    </Move>
  </Down>
);

export default DownButton;
