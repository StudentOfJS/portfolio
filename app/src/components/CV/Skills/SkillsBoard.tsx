import * as React from 'react';
import { images } from './images';
import styled from '../../../theme';

const SkillsImagesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 70vw;
  width: 100%;
`;

const SkillsContainer = styled.div`
  align-items: center;
  background-color: #666666;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  min-width: 320px;
  width: 70%;
`;

const SkillImage = styled.img`
  border-radius: 5px;
  height: 100px;
  width: 100px;
  &:hover{
    cursor: pointer;
    filter: drop-shadow(0 0 0.4rem white);
    height: 90px;
    width: 90px;
  }
`;

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
  width: 140px;
`;

const STitle = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;
interface SkillsBoardProps {
  filter: (f: string) => void;
}

const SkillsBoard: React.SFC<SkillsBoardProps> = ({ filter }) => {
  return (
    <SkillsContainer>
      <STitle>Skills</STitle>
      <SkillsImagesContainer>
        {
          // tslint:disable-next-line:no-any
          images.slice(0, images.length / 2).map((im: any, i: number) =>
            <ImageContainer key={i} onClick={() => filter(im.name)}><SkillImage src={im.image} /></ImageContainer>)}
      </SkillsImagesContainer>
      <SkillsImagesContainer>
        {
          // tslint:disable-next-line:no-any
          images.slice(images.length / 2).map((im: any, i: number) =>
            <ImageContainer key={i} onClick={() => filter(im.name)}><SkillImage src={im.image} /></ImageContainer>)}
      </SkillsImagesContainer>
    </SkillsContainer>
  );
};

export default SkillsBoard;
