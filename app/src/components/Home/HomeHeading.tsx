import * as React from 'react';
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

interface HeadingProps {
  mobile: boolean;
}

const HomeHeading: React.SFC<HeadingProps> = ({ mobile }) => (
  <Container text={true}>
    <Header
      as="h1"
      content="Rod's Portfolio"
      inverted={true}
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="take a look around"
      inverted={true}
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <div
      style={{
        alignItems: 'center',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      Get Started
      <Icon name="angle double down" primary={true} size="massive" />
    </div>
  </Container>
);

export default HomeHeading;
