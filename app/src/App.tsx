import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsView from './components/Projects/ProjectsView';
import CvView from './components/CV/CvView';
import Home from './components/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';

export default () => (
  <Router>
    <Nav>
      <Route exact={true} path="/" component={Home} />
      <Route path="/cv" component={CvView} />
      <Route path="/projects" component={ProjectsView} />
    </Nav>
    <Footer />
  </Router>
);
