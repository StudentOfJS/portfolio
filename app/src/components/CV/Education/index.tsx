import * as React from 'react';
import { Element } from 'react-scroll';
import EducationList from './EducationList';
import styled from '../../../theme';
import EducationBoard from './EducationBoard';
import { Helmet } from 'react-helmet';

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
  <div>
    <Helmet>
      <title>Rod's Education</title>
      <meta name="description" content="Rod Lewis's Education and Software Development Courses" />
    </Helmet>
    <EduContainer>
      <EducationBoard />
      <Element name="edu">
        <EducationList />
      </Element>
    </EduContainer>
  </div>
);
