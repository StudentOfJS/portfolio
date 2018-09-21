import * as React from 'react';
import ExperienceList from './ExperienceList';
import styled from '../../../theme';

const EContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.secondaryTextColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  width: 100vw;
`;

const ETitle = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-size: 34px;
  font-weight: 700;
  padding-top: 30px; 
`;

export default () => (
  <EContainer>
    <ETitle>Experience</ETitle>
    <ExperienceList />
  </EContainer>
);
