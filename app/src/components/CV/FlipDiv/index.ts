import styled, { keyframes } from '../../../theme';

const flip = keyframes`
  0% {
    transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
`;

const FlipDiv = styled.div`
  animation: ${flip} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

export default FlipDiv;
