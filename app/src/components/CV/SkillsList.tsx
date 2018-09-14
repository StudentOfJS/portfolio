import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { Skills } from '../../proto/portfolio_pb';

interface SkillProps {
  skills: Skills.AsObject;
}

class SkillsList extends React.Component<SkillProps, {}> {
  public render() {

    return (

    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    skills: state.cv.skills,
  };
}

export default connect(
  mapStateToProps,
)(SkillsList);
