import * as React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import { RouteProps } from 'react-router';

// tslint:disable-next-line:no-any
const Nav: React.SFC<RouteProps> = (props) => (
  <div>
    <DesktopContainer {...props} />
    <MobileContainer {...props} />
  </div>
);

export default Nav;
