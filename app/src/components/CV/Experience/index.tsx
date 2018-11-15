import * as React from 'react';
import ExperienceList from './ExperienceList';
import styled from '../../../theme';
import perthLowQuality from './perthLowQuality.svg';
import { Helmet } from 'react-helmet';

const EContainer = styled.div`
  align-items: center;
  background-color: #666666;
  background-image: url(${perthLowQuality});
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

  @media(max-width: 680px){
    font-size: 50px;
  }
  @media(min-width: 680px){
    font-size: 60px;
    padding: 50px;
  }
`;

export default () => (
  <div>
    <Helmet>
      <title>Rod's Experience</title>
      <meta name="description" content="Rod Lewis's Career History" />
    </Helmet>
    <EContainer>
      <ETitle>Experience</ETitle>
      <ExperienceList />
    </EContainer>
  </div>
);
