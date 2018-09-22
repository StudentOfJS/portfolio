import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { Image } from 'semantic-ui-react';
import Biohazard from './Biohazard.svg';
import styled from '../../../theme';

const BioContainer = styled.div`
  align-items: center;
  background-color: #666666;
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
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const BioTitle = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

class Bio extends React.Component<RootState, {}> {
  public render() {
    const { cv: { bio } } = this.props;
    console.log(bio);
    return (
      <BioContainer>
        <BioTitle>{bio && bio.title}</BioTitle>
        <BioContent>
          <Image src={Biohazard} size="large" />
          {bio && bio.description}
        </BioContent>
      </BioContainer>
    );
  }
}

function mapStateToProps(state: RootState) {
  return state;
}

export default connect(
  mapStateToProps,
)(Bio);