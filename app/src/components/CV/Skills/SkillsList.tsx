import * as React from 'react';
import { List } from 'semantic-ui-react';
import Rating from './Rating';
import { SkillState } from '.';
import styled from '../../../theme';

const SkillsListContainer = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: space-evenly;
  min-width: 320px;
  padding: 10px;
  width: 30%;
`;

const SkillsList: React.SFC<SkillState> = ({ skills }) => console.log(skills) || (
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
