import * as React from 'react';
import SkillsList from './SkillsList';
import styled from '../../../theme';
import SkillsBoard from './SkillsBoard';

const SContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.secondaryTextColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  width: 100vw;
`;

export default () => (
  <SContainer>
    <SkillsBoard />
    <SkillsList />
  </SContainer>
);
