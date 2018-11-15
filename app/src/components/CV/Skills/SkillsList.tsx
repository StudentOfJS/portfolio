import * as React from 'react';
import { List } from 'semantic-ui-react';
import Rating from './Rating';
import { SkillState } from '.';
import styled, { keyframes } from '../../../theme';

const SlideOut = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SkillsListContainer = styled.div`
  align-items: center;
  animation: ${SlideOut} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  background-color: hsla(0, 0%, 0%, 0.6);
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  justify-content: space-evenly;
  min-width: 300px;
  width: 30%;
  @media(max-width: 680px) {
    height: 100%;
    margin: 20px 0;
  }
  @media(min-width: 680px) {
    height: 100vh;
    padding: 10px;
  }
`;

const SkillsList: React.SFC<SkillState> = ({ skills }) => (
  <SkillsListContainer>
    <List>
      {
        skills.map(skill => (
          <List.Item key={skill.id}>{skill.description}<Rating rating={skill.rating} /></List.Item>
        ))
      }
    </List>
  </SkillsListContainer>
);

export default SkillsList;
