import * as React from 'react';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import HomeHeading from './HomeHeading';

export default class HomeMobileContainer extends React.Component {
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
            <Menu.Item as="a">Projects</Menu.Item>
            <Menu.Item as="a">CV</Menu.Item>
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
                    <Button as="a" inverted={true}>
                      Hire
                    </Button>
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
