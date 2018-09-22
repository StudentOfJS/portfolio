import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Modal, Image, Button } from 'semantic-ui-react';
import { RootState } from '../../store';
import images from './images';
import { Projects } from '../../proto/portfolio_pb';
import styled, { keyframes } from '../../theme';

const ProjectsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
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

const fadeIn = keyframes`
{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;

const CardContainer = styled.div`
  animation-duration: 5s;
  animation-name: ${fadeIn};
  background-color: white;
  border-radius: 3px;
  box-shadow: 1px 1px 5px black;
  height: 310px;
  margin: 10px;
  padding: 1px;
  &:hover{
    box-shadow: none;
    cursor: pointer;
  }
`;

const ProjectsTitle = styled.h2`
  color: ${props => props.theme.secondaryTextColor};
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
              <Modal
                basic={true}
                size="small"
                key={project.id}
                trigger={
                  <CardContainer>
                    <Card
                      style={{ height: '100%' }}
                      image={images[project.id]}
                      header={project.title}
                      description={`${project.description.slice(0, 50)}...`}
                      extra={extra(project.meta)}
                    />
                  </CardContainer>
                }
              >
                <Modal.Header>{project.title}</Modal.Header>
                <Modal.Content image={true}>
                  <Image wrapped={true} size="large" src={images[project.id]} />
                  <Modal.Description>
                    <p>{project.description}</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <a href={project.repo} target="_blank">
                    <Button color="green" as="a" inverted={true}>
                      <Icon name="github" />View Code
                    </Button>
                  </a>
                </Modal.Actions>
              </Modal>

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
