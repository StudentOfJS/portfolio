import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ProjectsList from './ProjectsList';

export default () => {
  return (
    <Container fluid={true}>
      <Header as="h2">
        Rod's Coding Projects
        <Header.Subheader>a selection of recent projects</Header.Subheader>
      </Header>
      <ProjectsList />
    </Container>
  );
};
