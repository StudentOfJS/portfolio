import * as React from 'react';
import { images } from './images';
import styled, { keyframes } from '../../../theme';

const SlideIn = keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInBottom = keyframes`
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

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
  background: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  min-width: 320px;
  width: 70%;
`;

const SkillImage = styled<{ isTop?: boolean, delay?: number }, 'img'>('img')`
  animation: ${props => props.isTop ? SlideIn : slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation-delay: ${props => props.delay ? props.delay : 0}s;
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
            <ImageContainer key={i} onClick={() => filter(im.name)}>
              <SkillImage isTop={true} src={im.image} delay={((images.length / 2) - i) / 5} />
            </ImageContainer>)}
      </SkillsImagesContainer>
      <SkillsImagesContainer>
        {
          // tslint:disable-next-line:no-any
          images.slice(images.length / 2).map((im: any, i: number) =>
            <ImageContainer key={i} onClick={() => filter(im.name)}>
              <SkillImage src={im.image} delay={i / 10} />
            </ImageContainer>)}
      </SkillsImagesContainer>
    </SkillsContainer>
  );
};

export default SkillsBoard;
