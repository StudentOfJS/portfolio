import * as React from 'react';
import { MobileMenuContainer, MobileMenuItem, BurgerDiv, MenuLink } from './style';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import HamburgerMenu from 'react-hamburger-menu';

export interface BurgerMenuProps { }

export interface BurgerMenuState {
  fresh: boolean;
  visible: boolean;
}

export default class BurgerMenu extends React.Component<BurgerMenuProps, BurgerMenuState> {
  state = {
    fresh: true,
    visible: false
  };
  handleClick = () => this.setState(prevProps => ({ fresh: false, visible: !prevProps.visible }));

  public render() {
    const { fresh, visible } = this.state;
    return (
      <div>
        <BurgerDiv>
          <HamburgerMenu
            isOpen={visible}
            menuClicked={this.handleClick}
            width={45}
            height={30}
            strokeWidth={5}
            rotate={0}
            color="orange"
            borderRadius={20}
            animationDuration={0.5}
          />
        </BurgerDiv>
        <MobileMenuContainer visible={visible} fresh={fresh}>
          <Link
            to="home"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={this.handleClick}
          >
            <MobileMenuItem visible={visible}>
              <Icon size="large" name="home" /> Home
            </MobileMenuItem>
          </Link>
          <Link
            to="skills"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={this.handleClick}
          >
            <MobileMenuItem visible={visible}><Icon size="large" name="star" /> Skills</MobileMenuItem>
          </Link>
          <Link
            to="projects"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={this.handleClick}
          >
            <MobileMenuItem visible={visible}><Icon size="large" name="code" /> Projects</MobileMenuItem>
          </Link>
          <Link
            to="career"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={this.handleClick}
          >
            <MobileMenuItem visible={visible}><Icon size="large" name="suitcase" /> Experience</MobileMenuItem>
          </Link>
          <Link
            to="education"
            activeClass="active-mobile"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={this.handleClick}
          >
            <MobileMenuItem visible={visible}><Icon size="large" name="graduation cap" /> Education</MobileMenuItem>
          </Link>
          <MobileMenuItem visible={visible}>
            <MenuLink href="https://github.com/StudentOfJS" target="_blank">
              <Icon size="large" name="github" />
            </MenuLink>
            <MenuLink href="tel:+490243098"><Icon size="large" name="mobile" /></MenuLink>
            <MenuLink href="mailto:rodlewis45@gmail.com" target="_blank"><Icon size="large" name="mail" /></MenuLink>
          </MobileMenuItem>
        </MobileMenuContainer>
      </div>
    );
  }
}
