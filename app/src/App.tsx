import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectsView from './components/Projects/ProjectsView';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import EducationList from './components/CV/EducationList';
import Experience from './components/CV/Experience';
import Bio from './components/CV/Bio';
import Skills from './components/CV/Skills';

export default () => (
  <Router>
    <Wrapper>
      <div>
        <Nav />
        <Switch>
          <Route path="/projects" component={ProjectsView} />
          <Route path="/bio" component={Bio} />
          <Route path="/education" component={EducationList} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route exact={true} path="/" component={ProjectsView} />
        </Switch>
        <Footer />
      </div>
    </Wrapper>
  </Router>
);
