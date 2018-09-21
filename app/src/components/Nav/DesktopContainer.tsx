import * as React from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import HomeHeading from '../Home/HomeHeading';
import { NavLink, Link, RouteProps } from 'react-router-dom';

// tslint:disable-next-line:no-any
export default class DesktopContainer extends React.Component<RouteProps> {
  public state = {
    fixed: true
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, location } = this.props;
    const { fixed } = this.state;
    const path = location && location.pathname;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted={true}
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical={true}
          >
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <NavLink to="/"><Menu.Item name="Home" active={path === '/'} /></NavLink>
                <NavLink to="/bio"><Menu.Item name="bio" active={path === '/bio'} /></NavLink>
                <NavLink to="/education"><Menu.Item name="education" active={path === '/education'} /></NavLink>
                <NavLink to="/experience"><Menu.Item name="experience" active={path === '/experience'} /></NavLink>
                <NavLink to="/skills"><Menu.Item name="skills" active={path === '/skills'} /></NavLink>
                <NavLink to="/projects"><Menu.Item name="Projects" active={path === '/projects'} /></NavLink>
                <Menu.Item position="right">
                  <Link to="/hire">
                    <Button inverted={!fixed}>
                      Hire
                    </Button>
                  </Link>
                </Menu.Item>
              </Container>
            </Menu>
            <HomeHeading mobile={false} />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}
