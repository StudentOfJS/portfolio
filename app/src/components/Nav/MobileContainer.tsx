import * as React from 'react';
import { NavLink, Link, RouteProps } from 'react-router-dom';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import HomeHeading from '../Home/HomeHeading';

// tslint:disable-next-line:no-any
export default class MobileContainer extends React.Component<RouteProps> {

  state = { sidebarOpened: false };

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) { this.setState({ sidebarOpened: false }); }
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children, location } = this.props;
    const { sidebarOpened } = this.state;
    const path = location && location.pathname;
    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="uncover" inverted={true} vertical={true} visible={sidebarOpened}>
            <NavLink to="/"><Menu.Item name="Home" active={path === '/'} /></NavLink>
            <NavLink to="/bio"><Menu.Item name="bio" active={path === '/bio'} /></NavLink>
            <NavLink to="/education"><Menu.Item name="education" active={path === '/education'} /></NavLink>
            <NavLink to="/experience"><Menu.Item name="experience" active={path === '/experience'} /></NavLink>
            <NavLink to="/skills"><Menu.Item name="skills" active={path === '/skills'} /></NavLink>
            <NavLink to="/projects"><Menu.Item name="Projects" active={path === '/projects'} /></NavLink>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted={true}
              textAlign="center"
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical={true}
            >
              <Container>
                <Menu inverted={true} pointing={true} secondary={true} size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Link to="/hire">
                      <Button inverted={true}>
                        Hire
                    </Button>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomeHeading mobile={true} />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}
