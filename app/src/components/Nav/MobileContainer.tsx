import * as React from 'react';
import { Icon, Responsive } from 'semantic-ui-react';
import { Element, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Wrapper from '../Wrapper';
import Education from '../CV/Education';
import Experience from '../CV/Experience';
import Bio from '../CV/Bio';
import ProjectsView from '../Projects/ProjectsView';
import styled, { keyframes } from '../../theme';

const up = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    transform: translateY(8px);
  }
  80% {
    transform: translateY(6.4px);
  }
  90% {
    transform: translateY(-6.4px);
  }
`;

const Move = styled.div`
  animation: ${up} 4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
  height: 100px;
  padding: 10px 5px;
  width: 100px;
`;

const Up = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

// tslint:disable-next-line:no-any
export default class MobileContainer extends React.Component {
  state = { sidebarOpened: false };
  public componentDidMount() {
    scrollSpy.update();
  }

  public scrollToTop = () => {
    scroll.scrollToTop();
  }
  render() {
    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Wrapper>
          <Element name="bio">
            <Bio />
          </Element>
          <Up>
            <Move>
              <Icon onClick={this.scrollToTop} name="angle double up" size="huge" color="yellow" />
            </Move>
          </Up>
          <Element name="projects">
            <ProjectsView />
          </Element>
          <Element name="education">
            <Experience />
          </Element>
          <Element name="experience">
            <Education />
          </Element>
        </Wrapper>
      </Responsive>
    );
  }
}
