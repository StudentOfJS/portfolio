import * as React from 'react';
import { Route, NavLink, RouteComponentProps } from 'react-router-dom';

import { connect, Dispatch } from 'react-redux';
import { portfolio, RootAction } from '../../actions';
import { Input, Menu, Segment } from 'semantic-ui-react';
import SkillsList from './SkillsList';
import ExperienceList from './ExperienceList';
import Bio from './Bio';
import EducationList from './EducationList';

type ICvViewProps = {
  fetchCV: () => Promise<void>;
};

class CvView extends React.Component<RouteComponentProps & ICvViewProps> {
  public componentDidMount = async () => {
    await this.props.fetchCV();
  }
  public render() {
    const { path } = this.props.match;
    return (
      <React.Fragment>
        <Menu attached="top" tabular={true}>
          <NavLink to="/cv/bio"><Menu.Item name="bio" active={path === '/cv/bio'} /></NavLink>
          <NavLink to="/cv/education"><Menu.Item name="education" active={path === '/cv/education'} /></NavLink>
          <NavLink to="/cv/experience"><Menu.Item name="experience" active={path === '/cv/experience'} /></NavLink>
          <NavLink to="/cv/skills"><Menu.Item name="skills" active={path === '/cv/skills'} /></NavLink>
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
          <Route path="/cv/bio" component={Bio} />
          <Route path="/cv/education" component={EducationList} />
          <Route path="/cv/experience" component={ExperienceList} />
          <Route path="/cv/skills" component={SkillsList} />
        </Segment>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    fetchCV: async () => {
      await dispatch(portfolio.initializeBio());
      await dispatch(portfolio.initializeCV());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CvView);