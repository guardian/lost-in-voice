import { css, keyframes } from '@emotion/react/macro';


function randomUntil(num: number) {
  return Math.floor(Math.random() * num);
}

function boxShadowStars(quantity: number) {
  return Array.from({ length: quantity }, () => {
    return `${randomUntil(2000)}px ${randomUntil(2000)}px #ffffff`
  }).join(' , ');
}

const allowsAnimation = '@media (prefers-reduced-motion: no-preference)';

const starsSmall = boxShadowStars(700);
const starsMedium = boxShadowStars(200);
const starsBig = boxShadowStars(100);

const starAnimation = keyframes`
    from	{
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
`;

export const starFieldBackground = css`
  height: 100vh;
  background-color: black;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
`;

export const smallStars = css`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${starsSmall};
  ${allowsAnimation} {
    animation: ${starAnimation} 50s linear infinite;
  }
    
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${starsSmall};
  }
`;

export const mediumStars = css`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${starsMedium};
  ${allowsAnimation} {
    animation: ${starAnimation} 100s linear infinite;
  }
    
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${starsMedium};
  }
`;

export const bigStars = css`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${starsBig};
  ${allowsAnimation} {
    animation: ${starAnimation} 150s linear infinite;
  }
  
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${starsBig};
  }  
`;