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
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Request Meeting</List.Item>
              <List.Item as="a">Gazebo Plans</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted={true} as="h4" content="Services" />
            <List link={true} inverted={true}>
              <List.Item as="a">Banana Pre-Order</List.Item>
              <List.Item as="a">DNA FAQ</List.Item>
              <List.Item as="a">How To Access</List.Item>
              <List.Item as="a">Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted={true}>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);