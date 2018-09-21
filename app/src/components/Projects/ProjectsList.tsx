import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, List } from 'semantic-ui-react';
import { RootState } from '../../store';
import * as images from './images';
import { Projects } from '../../proto/portfolio_pb';

const extra = (keywords: string) => (
  <a>
    <Icon name="tags" />
    {keywords}
  </a>
);

interface ProjectsProps {
  p: Projects.AsObject;
}

class ProjectsList extends React.Component<ProjectsProps, {}> {

  public render() {
    const { p } = this.props;

    return (
      <List animated={true} verticalAlign="middle">
        {p && p.projectsList.map(project => {
          return (
            <List.Item key={project.id}>
              <Card
                image={images[project.id]}
                header={project.title}
                description={project.description}
                extra={extra(project.meta)}
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
    p: state.cv.projects
  };
}

export default connect(mapStateToProps)(ProjectsList);
