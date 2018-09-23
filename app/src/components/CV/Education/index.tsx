import * as React from 'react';
import EducationList from './EducationList';
import styled from '../../../theme';
import EducationBoard from './EducationBoard';

const EduContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.secondaryTextColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding: 10px;
  width: 100vw;
`;

export default () => (
  <EduContainer>
    <EducationBoard />
    <EducationList />
  </EduContainer>
);
