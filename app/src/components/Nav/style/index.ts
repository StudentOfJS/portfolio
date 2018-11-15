import styled, { keyframes } from '../../../theme';

const slideIn = keyframes`
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px);
    opacity: 0;
  }
`;

export const MobileMenuContainer = styled<{ fresh: boolean, visible: boolean }, 'div'>('div')`
  align-items: flex-start;
  animation: ${props => !props.visible ? slideOut : slideIn} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  background-color: hsla(0, 0%, 0%, 0.7);
  display: ${props => props.fresh ? 'none' : 'flex'};
  flex-direction: column;
  height: 40vh;
  justify-content: space-evenly;
  padding-left: 33%;
  position: fixed
  top: 0;
  width: 100vw;
  z-index: 100;
`;

export const MobileMenuItem = styled<{ visible: boolean }, 'div'>('div')`
  color: orange;
  display: inline-block;
  font-family: ${props => props.theme.fontFamily};
  font-size: 18px;
  padding: 5px;
`;

export const BurgerDiv = styled.div`
  left: 0;
  padding: 15px;
  position: fixed
  top: 0;
  z-index: 101;
`;

export const MenuLink = styled.a`
  color: orange;
  :hover{
    color: orangered;
  }
`;