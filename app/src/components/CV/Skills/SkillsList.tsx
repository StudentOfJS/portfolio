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
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 320px;
  padding: 10px;
  width: 30%;
  @media(max-width: 680px) {
    height: 100%;
    margin: 20px 0;
  }
  @media(min-width: 680px) {
    height: 100vh;
  }
`;

const SkillsList: React.SFC<SkillState> = ({ skills }) => (
  <SkillsListContainer>
    <List>
      {
        skills.map(skill => (
          <List.Item key={skill.id} >{skill.description}<Rating rating={skill.rating} /></List.Item>
        ))
      }
    </List>
  </SkillsListContainer>
);

export default SkillsList;
