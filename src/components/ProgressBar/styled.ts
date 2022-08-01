import styled, { keyframes } from 'styled-components';

import { theme } from 'theme';

export const progress = keyframes`
    0% {
      width: 100%;
    }
    100% {
      width: 0
    }
`;

export const StyledProgressBar = styled.div<{ autoCloseTime: number }>`
  width: 100%;
  height: ${theme.sizes.spaces[1]}px;
  background: linear-gradient(to right, #00b360 35%, #ffb036 68%);
  border-radius: ${theme.borderRadius}px;
  animation: ${progress};
  animation-duration: ${({ autoCloseTime }) => autoCloseTime}ms;
  animation-timing-function: linear;
`;
