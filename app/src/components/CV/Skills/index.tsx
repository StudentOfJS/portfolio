import * as React from 'react';
import { connect } from 'react-redux';
import { Skills, Skill } from '../../../proto/portfolio_pb';
import { RootState } from '../../../store';
import styled from '../../../theme';
import SkillsBoard from './SkillsBoard';
import SkillsList from './SkillsList';

const SContainer = styled.div`
  align-items: center;
  background-color: #666666;
  color: ${props => props.theme.secondaryTextColor};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
  width: 100vw;
`;

export interface SkillProps {
  skills: Skills.AsObject;
}

export interface SkillState {
  skills: Skill.AsObject[];
}

class SkillsView extends React.Component<SkillProps, SkillState> {
  public state = { skills: [] };
  public filter: ((f: string) => void) = (f) => {
    const skills = this.props.skills.skillsList.filter(s => s.name === f);
    this.setState({ skills });
  }
  public render() {
    const { skills } = this.state;
    return (
      <SContainer>
        <SkillsBoard filter={this.filter} />
        {skills.length > 0 && <SkillsList skills={skills} />}
      </SContainer>
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
)(SkillsView);
