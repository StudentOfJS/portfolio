import * as React from 'react';
import {
  Button,
  Menu,
  Visibility,
} from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import styled from '../../theme';

export const MenuLink = styled(NavLink)`
  height: 100%;
  padding-top: 10px;
  text-align: center;
  vertical-align: middle;
  width: 100%;
`;

export const activeStyle = {
  borderBottom: '2px solid orange'
};

// tslint:disable-next-line:no-any
export default class DesktopContainer extends React.Component {
  public state = {
    fixed: true
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;
    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        {
          fixed && (
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={true}
              size="small"
            >
              <Menu.Item link={true}><MenuLink to="/">Home</MenuLink></Menu.Item>
              <Menu.Item link={true}>
                <MenuLink activeStyle={activeStyle} to="/education">Education</MenuLink>
              </Menu.Item>
              <Menu.Item link={true}>
                <MenuLink activeStyle={activeStyle} to="/experience">Experience
                  </MenuLink></Menu.Item>
              <Menu.Item link={true}>
                <MenuLink activeStyle={activeStyle} to="/skills">Skills
                  </MenuLink></Menu.Item>
              <Menu.Item link={true}>
                <MenuLink activeStyle={activeStyle} to="/projects">Projects
                  </MenuLink></Menu.Item>
              <Menu.Item position="right" link={true}>
                <Link to="/hire">
                  <Button inverted={true} size="small" >
                    Hire
                    </Button>
                </Link>
              </Menu.Item>
            </Menu>
          )
        }
      </Visibility>
    );
  }
}
