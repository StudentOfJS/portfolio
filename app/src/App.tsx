import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsView from './components/Projects/ProjectsView';
import CvView from './components/CV/CvView';
import Home from './components/Home';
import Footer from './components/Footer';

export default () => (
  <Router>
    <Route exact={true} path="/" component={Home} />
    <Route path="/cv" component={CvView} />
    <Route path="/projects" component={ProjectsView} />
    <Footer />
  </Router>
);
