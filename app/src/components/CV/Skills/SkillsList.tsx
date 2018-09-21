import * as React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import Rating from './Rating';
import { Skills } from '../../../proto/portfolio_pb';
import { RootState } from '../../../store';

interface SkillProps {
  skills: Skills.AsObject;
}

class SkillsList extends React.Component<SkillProps, {}> {
  public render() {
    const { skills } = this.props;
    return (
      <List>
        {
          skills.skillsList.map(skill => (
            <List.Item>{skill.name} - {skill.description} - <Rating rating={skill.rating} /></List.Item>
          ))
        }
      </List>
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
