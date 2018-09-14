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
import { NavLink, Link, RouteComponentProps } from 'react-router-dom';

export default class DesktopContainer extends React.Component<RouteComponentProps> {
  public state = {
    fixed: true
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, match: { path } } = this.props;
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
                <NavLink to="/"><Menu.Item as="a" name="Home" active={path === '/'} /></NavLink>
                <NavLink to="/cv"><Menu.Item as="a" name="CV" active={path.includes('/cv')} /></NavLink>
                <NavLink to="/projects"><Menu.Item as="a" name="Projects" active={path === '/projects'} /></NavLink>
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
