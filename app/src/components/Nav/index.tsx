import * as React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

interface RCProps {
  children?: React.ReactNode;
}

const Nav: React.SFC<RCProps> = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

export default Nav;
