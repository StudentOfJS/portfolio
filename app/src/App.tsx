import * as React from 'react';
import { BrowserRouter as Router, Route, NavLink, RouteComponentProps } from 'react-router-dom';
import { Input, Menu, Segment } from 'semantic-ui-react';
import ProjectsView from './components/Projects/ProjectsView';
import CvView from './components/CV/CvView';
import Home from './components/Home';

const App: React.SFC<RouteComponentProps> = ({ match }) => (
  <Router>
    <Menu attached="top" tabular={true}>
      <NavLink to="/"><Menu.Item name="home" active={match.path === '/'} /></NavLink>
      <NavLink to="/cv"><Menu.Item name="cv" active={match.path === '/cv'} /></NavLink>
      <NavLink to="/projects"><Menu.Item name="projects" active={match.path === '/projects'} /></NavLink>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            transparent={true}
            icon={{ name: 'search', link: true }}
            placeholder="Search CV..."
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>

    <Segment attached="bottom">
      <Route exact={true} path="/" component={Home} />
      <Route path="/cv" component={CvView} />
      <Route path="/projects" component={ProjectsView} />
    </Segment>
  </Router>
);

export default App;
