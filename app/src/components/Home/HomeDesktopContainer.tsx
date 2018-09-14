import * as React from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import HomeHeading from './HomeHeading';
import { NavLink, Link } from 'react-router-dom';

export default class HomeDesktopContainer extends React.Component {
  public state = {
    fixed: true
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

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
            style={{ height: '100vh', minHeight: 700, padding: '1em 0em' }}
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
                <Menu.Item as="a" name="Home" active={true} />
                <NavLink to="/cv"><Menu.Item as="a" name="CV" /></NavLink>
                <NavLink to="/projects"><Menu.Item as="a" name="Projects" /></NavLink>
                <Menu.Item position="right">
                  <Link to="/hire">
                    <Button as="a" inverted={!fixed}>
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
