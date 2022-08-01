import styled from 'styled-components';

import { theme } from 'theme';

export const StyledToastContainer = styled.div<{ position: string }>`
  position: absolute;
  z-index: 10000;

  top: ${({ position }) => theme.toastPosition[position].top};
  bottom: ${({ position }) => theme.toastPosition[position].bottom};
  right: ${({ position }) => theme.toastPosition[position].right};
  left: ${({ position }) => theme.toastPosition[position].left};
`;
