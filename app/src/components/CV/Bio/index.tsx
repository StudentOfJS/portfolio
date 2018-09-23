import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { Icon } from 'semantic-ui-react';
import styled, { keyframes } from '../../../theme';
import * as dev from './images/dev.jpg';
import About from './About';

const BioContainer = styled.div`
  background-color: #666666;
  background-image: url(${dev});
  height: 100vh;
  width: 100vw;
`;

const BioFilter = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  opacity: 0.7;
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
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 20px;
  padding: 0;
`;

const Italic = styled.i`
  color: orange;
  font-style: oblique;
  font-weight: 900;
`;

const down = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    transform: translateY(8px);
  }
  80% {
    transform: translateY(6.4px);
  }
  90% {
    transform: translateY(-6.4px);
  }
`;

const Move = styled.div`
  animation: ${down} 4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
  height: 100px;
  padding: 10px 5px;
  width: 100px;
`;

const Down = styled.div`
  align-items: center;
  bottom: 0;
  display: inline-flex;
  justify-content: center;
  padding: 10px;
  position: absolute;
  width: 100vw;
  z-index: 10;
  @media(max-width: 680px) {
    display: none;
  }
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
`;

const Tagline = styled.div`
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 420px;
`;

class Bio extends React.Component<RootState, {}> {
  public render() {
    // const { cv: { bio } } = this.props;
    return (
      <div>
        <BioContainer>
          <BioFilter>
            <Down>
              <Move>
                <Icon name="angle double down" size="massive" />
              </Move>
            </Down>
            <BioContent>
              <BioTitle>ROD<Italic>/ </Italic>LEWIS</BioTitle>
              <Tagline><Type>specializing in React and Go </Type></Tagline>
            </BioContent>
          </BioFilter>
        </BioContainer>
        <About />
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