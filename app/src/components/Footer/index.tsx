import * as React from 'react';
import styled from '../../theme';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const FooterLink = styled(Link)`
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-size: 12px;
  &:hover{
    color: orange;
  }
`;

const MailTo = styled.a`
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-size: 12px;
  &:hover{
    color: orange;
  }
`;

const LinksContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Visible = styled.div`
  @media(max-width: 680px) {
    display: none;
  }
`;

export default () => (
  <Visible>
    <Segment
      inverted={true}
      style={{ backgroundColor: 'grey', borderTop: 'solid 3px orange', padding: '5em 0em' }}
      vertical={true}
    >
      <Container>
        <Grid divided={true} inverted={true} stackable={true}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted={true} as="h4" content="About" />
              <List link={true} inverted={true}>
                <LinksContainer>
                  <FooterLink to="/">This Site</FooterLink>
                  <FooterLink to="/">Rod Lewis</FooterLink>
                  <MailTo
                    href="mailto:rodlewis45@gmail.com?subject=Enquiry from Portfolio Site"
                    target="_blank"
                  >
                    Contact
                  </MailTo>
                </LinksContainer>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted={true} as="h4" content="Services" />
              <List link={true} inverted={true}>
                <LinksContainer>
                  <FooterLink to="/projects">Projects</FooterLink>
                  <FooterLink to="/skills">Skills</FooterLink>
                  <FooterLink to="/education">Education</FooterLink>
                </LinksContainer>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted={true}>
                Rod Lewis
            </Header>
              <p>
                If you like what you see, I'm available to hire.
                I specialize in React applications and can architect a backend to meet most needs.
                Whether that's a simple JSON/HTML api or a complex gRPC deployment, I have you covered.
                Pricing Min $1500, $50p/h
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </Visible>
);