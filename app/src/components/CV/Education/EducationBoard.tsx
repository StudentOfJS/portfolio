import * as React from 'react';
import DownButton from '../DownButton';
import styled from '../../../theme';
import { Icon } from 'semantic-ui-react';
import * as bg from './images/ts-screenshot.png';

const EducationContainer = styled.div`
  align-items: center;
  background-color: #666666;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100vw;
  @media(max-width: 500px){
    height: 50vh;
  }

  @media(min-width: 500px){
    background-image: url(${bg});
    height: 100vh;
  }
`;

const EduTitle = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  margin: 0;
  padding: 0;

  @media(max-width: 500px){
    font-size: 50px;
  }
  @media(min-width: 500px){
    filter: drop-shadow(0 0 0.2rem black);
    font-size: 60px;
  }
`;

export default () => {
  return (
    <EducationContainer>
      <DownButton location="edu" />
      <EduTitle><Icon name="cubes" /> Education</EduTitle>
    </EducationContainer>
  );
};
