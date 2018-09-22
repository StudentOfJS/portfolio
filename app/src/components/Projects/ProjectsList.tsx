import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';
import { RootState } from '../../store';
import images from './images';
import { Projects } from '../../proto/portfolio_pb';
import styled from '../../theme';

const ProjectsContainer = styled.div`
  align-items: center;
  background-color: #666666;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  width: 100vw;
`;

const ProjectsDisplay = styled.div`
  align-items: space-evenly;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
  max-width: 1000px;
  width: 100%;
`;
const CardContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 380px;
  margin: 10px;
  padding: 1px;
`;

const ProjectsTitle = styled.h2`
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

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
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDisplay>
          {p && p.projectsList.map(project => {
            return (
              <CardContainer key={project.id}>
                <Card
                  style={{ height: '100%' }}
                  image={images[project.id]}
                  header={project.title}
                  description={project.description}
                  extra={extra(project.meta)}
                />
              </CardContainer>
            );
          })}
        </ProjectsDisplay>
      </ProjectsContainer>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    p: state.cv.projects
  };
}

export default connect(mapStateToProps)(ProjectsList);
