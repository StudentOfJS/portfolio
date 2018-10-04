import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Modal, Image, Button } from 'semantic-ui-react';
import { RootState } from '../../store';
import images from './images';
import { Projects } from '../../proto/portfolio_pb';
import styled, { keyframes } from '../../theme';
import { Helmet } from 'react-helmet';

const ProjectsContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, #040404, #3d3b3c, #7a7373, #bab3ad, #f7f8ed);
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100vw;
`;

const ProjectsDisplay = styled.div`
  @media (max-width: 500px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    width: 100%;
  }
  @media (min-width: 500px) {
    align-items: space-evenly;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-evenly;
    max-width: 1000px;
    width: 100%;
  }
`;

const rollinTop = keyframes`
  0% {
    transform: translateY(-800px) rotate(-720deg);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
`;

const rollinBottom = keyframes`
  0% {
    transform: translateY(800px) rotate(720deg);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
`;

const CardContainer = styled<{ isTop: boolean }, 'div'>('div')`
  animation: ${props => props.isTop ? rollinTop : rollinBottom} 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
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
  padding: 20px;
  @media(min-width: 680px){
    display: none;
  }

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

class ProjectList extends React.Component<ProjectsProps, {}> {

  public render() {
    const { p } = this.props;

    return (
      <div>
        <Helmet>
          <title>Rod's Projects</title>
          <meta name="description" content="A selection of Rod's recent React and Go projects" />
        </Helmet>
        <ProjectsContainer>
          <ProjectsTitle>Projects</ProjectsTitle>
          <ProjectsDisplay>
            {p && p.projectsList.map(project => {
              return (
                <Modal
                  basic={true}
                  key={project.id}
                  style={{ top: 0, paddingTop: '20%' }}
                  trigger={
                    <CardContainer isTop={project.id % 2 === 0}>
                      <Card
                        style={{ height: '100%' }}
                        image={images[project.id]}
                        header={project.title}
                        description={`${project.description.slice(0, 50)}...`}
                        extra={extra(project.meta)}
                      />
                    </CardContainer>}
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
                      <Button color="green" inverted={true}>
                        <Icon name="github" />View Code
                    </Button>
                    </a>
                  </Modal.Actions>
                </Modal>
              );
            })}
          </ProjectsDisplay>
        </ProjectsContainer>

      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    p: state.cv.projects
  };
}

export default connect(mapStateToProps)(ProjectList);
