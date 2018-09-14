import * as React from 'react';
import HomeDesktopContainer from './HomeDesktopContainer';
import HomeMobileContainer from './HomeMobileContainer';

interface RCProps {
  children?: React.ReactNode;
}

const HomeContainer: React.SFC<RCProps> = ({ children }) => (
  <div>
    <HomeDesktopContainer>{children}</HomeDesktopContainer>
    <HomeMobileContainer>{children}</HomeMobileContainer>
  </div>
);

export default HomeContainer;
