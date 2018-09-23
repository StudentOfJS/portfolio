import * as React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import styled from '../../theme';

const Desktop = styled.div`
  @media(max-width: 680px){
    display: none;
  }
`;

const Mobile = styled.div`
  @media(min-width: 680px){
    display:none;
  }
`;

export default () => (
  <div>
    <Desktop><DesktopContainer /></Desktop>
    <Mobile><MobileContainer /></Mobile>
  </div>
);
