import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Education from './components/CV/Education';
import Experience from './components/CV/Experience';
import Bio from './components/CV/Bio';
import Skills from './components/CV/Skills';
import styled from './theme';
import ScrollToTop from './components/ScrollToTop';

const RoutesContainer = styled.div`
  @media(max-width: 680px) {
    display: none;
  }
`;

export default () => (

  <Router>
    <Wrapper>
      <div>
        <Nav />
        <RoutesContainer>
          <Switch>
            <ScrollToTop>
              <Route path="/projects" component={Projects} />
              <Route path="/education" component={Education} />
              <Route path="/experience" component={Experience} />
              <Route path="/skills" component={Skills} />
              <Route exact={true} path="/" component={Bio} />
            </ScrollToTop>
          </Switch>
        </RoutesContainer>
        <Footer />
      </div>
    </Wrapper>
  </Router>
);
