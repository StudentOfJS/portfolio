import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { portfolio, RootAction } from '../../actions';
import { Card, Icon, List } from 'semantic-ui-react';
import { RootState } from '../../reducers';
import { ProjectState } from '../../reducers/projects_reducer';
import * as images from './images'

type IProjectsProps = {
  pobj: ProjectState,
  fetchProjects: () => Promise<void>;
};

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

class ProjectsList extends React.Component<IProjectsProps, {}> {
  public componentDidMount = async () => {
    await this.props.fetchProjects();
  }
  public render() {
    const { pobj } = this.props;

    return (
      <List animated={true} verticalAlign="middle">
        {pobj.projects && pobj.projects.projectsList.map(p => {
          return (
            <List.Item key={p.id}>
              <Card
                image={images[p.id]}
                header={p.title}
                meta={p.meta}
                description={p.description}
                extra={extra}
              />
            </List.Item>
          );
        })}
      </List>

    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    pobj: state.projects
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    fetchProjects: async () => {
      await dispatch(portfolio.initializeProjects());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);