import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { Element } from 'react-scroll';
import About from './About';
import { Helmet } from 'react-helmet';
import Home from '../Home';

class Bio extends React.Component<RootState, {}> {
  public render() {
    return (
      <div>
        <Helmet>
          <title>About Rod's Portfolio</title>
          <meta name="description" content="Rod Lewis's React and Go Portfolio" />
        </Helmet>
        <Home nextComponent="about" />
        <Element name="about">
          <About />
        </Element>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return state;
}

export default connect(
  mapStateToProps,
)(Bio);