import * as React from 'react';
import DownButton from '../DownButton';
import styled from '../../../theme';
import { Icon } from 'semantic-ui-react';
import edu from './images/edu.svg';

const EducationContainer = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100vw;
  @media(max-width: 680px){
    background-color: white;
    height: 20vh;
  }

  @media(min-width: 680px){
    background-image: url(${edu});
    height: 100vh;
  }
`;

const EduTitle = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  margin: 0;
  padding: 0;

  @media(max-width: 680px){
    color: black;
    font-size: 50px;
  }
  @media(min-width: 680px){
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
