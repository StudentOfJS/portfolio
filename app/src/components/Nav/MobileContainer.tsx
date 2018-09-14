import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
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

export default class MobileContainer extends React.Component {
  state = { sidebarOpened: false };

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) { this.setState({ sidebarOpened: false }); }
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="uncover" inverted={true} vertical={true} visible={sidebarOpened}>
            <Menu.Item as="a" active={true}>
              Home
            </Menu.Item>
            <NavLink to="/cv"><Menu.Item as="a" name="CV" /></NavLink>
            <NavLink to="/projects"><Menu.Item as="a" name="Projects" /></NavLink>
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
                      <Button as="a" inverted={true}>
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
