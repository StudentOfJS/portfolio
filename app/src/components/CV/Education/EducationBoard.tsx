import * as React from 'react';
import styled from '../../../theme';
import { Icon } from 'semantic-ui-react';
import * as bg from './images/ts-screenshot.png';

const EducationContainer = styled.div`
  align-items: center;
  background-color: #666666;
  background-image: url(${bg});
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  width: 100vw;
`;

const EduTitle = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  filter: drop-shadow(0 0 0.2rem black);
`;

export default () => {
  return (
    <EducationContainer>
      <EduTitle><Icon name="cubes" /> Education</EduTitle>
    </EducationContainer>
  );
};
