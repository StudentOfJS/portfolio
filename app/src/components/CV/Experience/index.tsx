import * as React from 'react';
import ExperienceList from './ExperienceList';
import styled from '../../../theme';
import { Icon } from 'semantic-ui-react';
import perth from './perth.jpg';

const EContainer = styled.div`
  align-items: center;
  background-color: #666666;
  background-image: url(${perth});
  background-size: cover;
  color: ${props => props.theme.secondaryTextColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding: 10px;
  width: 100vw;
`;

const ETitle = styled.h2`
  color: white;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  margin: 0;
  padding: 50px;

  @media(max-width: 500px){
    font-size: 50px;
  }
  @media(min-width: 500px){
    font-size: 60px;
  }
`;

export default () => (
  <EContainer>
    <ETitle><Icon name="react" /> Experience</ETitle>
    <ExperienceList />
  </EContainer>
);
