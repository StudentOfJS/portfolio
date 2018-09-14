import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { portfolio, RootAction } from './actions';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { RootState } from './reducers';
import { CVState } from './reducers/cv_reducer';
import { ProjectState } from './reducers/projects_reducer';

type IAppProps = {
  cv: CVState,
  projects: ProjectState,
  fetchProjects: () => Promise<void>;
  fetchCV: () => Promise<void>;
};

class App extends React.Component<IAppProps, {}> {
  public componentDidMount = async () => {
    await this.props.fetchProjects();
    await this.props.fetchCV();
  }
  public render() {

    return (
      <Router>
        <Menu attached="top" tabular={true}>
          <NavLink to="/bio"><Menu.Item name="bio" active={activeItem === 'bio'} /></NavLink>
          <NavLink to="/education"><Menu.Item name="education" active={activeItem === 'education'} /></NavLink>
          <NavLink to="/experience"><Menu.Item name="experience" active={activeItem === 'experience'} /></NavLink>
          <NavLink to="/projects"><Menu.Item name="projects" active={activeItem === 'projects'} /></NavLink>
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
          <Route path="/about" component={About} />
          <Route exact={true} path="/projects" component={Topics} />
          <Route path="/projects/:id" component={Topics} />
        </Segment>
      </Router>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    cv: state.cv,
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    fetchProjects: async () => {
      await dispatch(portfolio.initializeProjects());
    },
    fetchCV: async () => {
      await dispatch(portfolio.initializeBio());
      await dispatch(portfolio.initializeCV());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);