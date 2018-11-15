import * as React from 'react';
import { connect } from 'react-redux';
import { Skills, Skill } from '../../../proto/portfolio_pb';
import { RootState } from '../../../store';
import SkillsBoard from './SkillsBoard';
import SkillsList from './SkillsList';
import styled from '../../../theme';
import { Helmet } from 'react-helmet';
import bg from './images/bg.svg';

const Container = styled.div`
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  color: ${props => props.theme.secondaryTextColor};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
  width: 100vw;
`;

const Mobile = styled(Container)`
  @media(min-width: 680px) {
    display: none;
  }
`;

const Desktop = styled(Container)`
  @media(max-width: 680px) {
    display: none;
  }
`;

const MobileTitle = styled.h2`
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  font-size: 50px;
  margin: 0;
  padding: 0;
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
      <div>
        <Helmet>
          <title>Rod's Programming Skills</title>
          <meta name="description" content="Software Development Skills, including React, Go, JavaScript..." />
        </Helmet>
        <Container>
          <Desktop>
            <SkillsBoard filter={this.filter} />
            {skills.length > 0 && <SkillsList skills={skills} />}
          </Desktop>
          <Mobile>
            <MobileTitle>Skills</MobileTitle>
            <SkillsList skills={this.props.skills.skillsList} />
          </Mobile>
        </Container>
      </div>
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
