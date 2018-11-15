import * as React from 'react';
import { Element } from 'react-scroll';
import Wrapper from '../Wrapper';
import Education from '../CV/Education';
import Experience from '../CV/Experience';
import Projects from '../Projects';
import Skills from '../CV/Skills';
import Home from '../CV/Home';
import BurgerMenu from './BurgerMenu';

interface State {
  active: string;
  sidebarOpened: boolean;
}

// tslint:disable-next-line:no-any
export default class MobileContainer extends React.Component<{}, State> {
  state = {
    active: 'home',
    sidebarOpened: false,
  };
  render() {
    return (
      <Wrapper>
        <BurgerMenu />
        <Element name="home">
          <Home nextComponent="" />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="career">
          <Experience />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="education">
          <Education />
        </Element>
      </Wrapper >
    );
  }
}
