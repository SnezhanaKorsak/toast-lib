import { keyframes } from 'styled-components';

const fadeIn = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
`;

const fadeOut = keyframes`
 0% { opacity: 1 }
 100% { opacity: 0 }
`;

const slideIn = keyframes`
 0% { transform: translate(100%) }
 100% { transform: translate(0) }
`;

const slideOut = keyframes`
 0% { transform: translateX(0) }
 100% { transform: translateX(100%) }
`;

const zoomIn = keyframes`
 0% { transform: scale(0) }
 100% { transform: scale(1) }
`;

const zoomOut = keyframes`
 0% { transform: scale(1) }
 100% { transform: scale(0) }
`;

export const createAnimationMode = (animationName: string, reverse: boolean) => {
  if (!reverse) {
    switch (animationName) {
      case 'slide':
        return slideIn;
      case 'fade':
        return fadeIn;
      case 'zoom':
        return zoomIn;
      default:
        return slideIn;
    }
  } else {
    switch (animationName) {
      case 'slide':
        return slideOut;
      case 'fade':
        return fadeOut;
      case 'zoom':
        return zoomOut;
      default:
        return slideOut;
    }
  }
};
