import * as React from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';

export default () => (
  <Segment inverted={true} vertical={true} style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided={true} inverted={true} stackable={true}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted={true} as="h4" content="About" />
            <List link={true} inverted={true}>
              <List.Item as="a">CV</List.Item>
              <List.Item as="a">Projects</List.Item>
              <List.Item as="a">Contact</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted={true} as="h4" content="Services" />
            <List link={true} inverted={true}>
              <List.Item as="a">Frontend</List.Item>
              <List.Item as="a">Backend</List.Item>
              <List.Item as="a">Other</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted={true}>
              Rod Lewis
            </Header>
            <p>
              If you like what you see, I'm available to hire.
              I specialise in React applications and can architect a backend to meet most needs.
              Whether that's a simple JSON/HTML api or a complex gRPC deployment, I have you covered.
              Pricing Min $1500, $50p/h
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);