import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectsView from './components/Projects/ProjectsView';
import CvView from './components/CV';
import Home from './components/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';

export default () => (
  <Router>
    <Switch>
      <Nav>
        <Wrapper>
          <Route exact={true} path="/" component={Home} />
          <Route path="/cv" component={CvView} />
          <Route path="/projects" component={ProjectsView} />
        </Wrapper>
      </Nav>
      <Footer />
    </Switch>
  </Router>
);
