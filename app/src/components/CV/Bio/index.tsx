import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { Element } from 'react-scroll';
import styled, { keyframes } from '../../../theme';
import bg from './images/bg.svg';
import About from './About';
import DownButton from '../DownButton';
import { Helmet } from 'react-helmet';
const BioContainer = styled.div`
  background-color: #666666;
  background-image: url(${bg});
  background-size: cover;
  background-blend-mode: multiply;
  height: 100vh;
  width: 100vw;
`;

const BioFilter = styled.div`
  align-items: center;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  width: 100vw;
`;

const BioContent = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const blur = keyframes`
0% {
  filter: blur(12px);
  opacity: 0;
}
100% {
  filter: blur(0px);
  opacity: 1;
}
`;

const BioTitle = styled.h1`
  animation: ${blur} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 20px;
  padding: 0;
  @media(min-width: 680px){
    font-size: 60px;
  }
  @media(max-width: 680px){
    font-size: 50px;
    padding: 5px;
  }
`;

const Italic = styled.i`
  color: orange;
  font-style: oblique;
  font-weight: 900;
`;

const type = keyframes`
  from { width: 0 }
  to { width: 100% }
`;
const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

const Type = styled.h2`
  animation: 
    ${type} 3.5s steps(40, end),
    ${blink} .75s step-end infinite;
  border-right: .15em solid orange;
  letter-spacing: .15em;
  margin: 10 auto;
  overflow: hidden;
  white-space: nowrap;
  @media(max-width: 680px){
    font-size: 18px;
  }

`;

const Tagline = styled.div`
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 420px;
  @media(max-width: 680px){
    padding: 5px;
  }
`;

class Bio extends React.Component<RootState, {}> {
  public render() {
    return (
      <div>
        <Helmet>
          <title>About Rod's Portfolio</title>
          <meta name="description" content="Rod Lewis's React and Go Portfolio" />
        </Helmet>

        <BioContainer>
          <BioFilter>
            <DownButton location="about" />
            <BioContent>
              <BioTitle>ROD<Italic>/ </Italic>LEWIS</BioTitle>
              <Tagline><Type>specializing in React and Go </Type></Tagline>
            </BioContent>
          </BioFilter>
        </BioContainer>
        <Element name="about">
          <About />
        </Element>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return state;
}

export default connect(
  mapStateToProps,
)(Bio);