import styled from 'styled-components';

import { createAnimationMode } from 'helpers/createAnimationMode';
import { theme } from 'theme';

import { ToastContentProps, ToastWrapperProps } from './types';

export const ToastWrapper = styled.div<ToastWrapperProps>`
  position: relative;
  left: ${({ offsetX }) => offsetX}px;
  margin: ${theme.sizes.spaces[1]}px ${theme.sizes.spaces[0]}px ${theme.sizes.spaces[2]}px;
  border-radius: ${theme.borderRadius}px;
  font-family: ${theme.fontFamily};
  opacity: 1;
  animation: ${({ animation, reverse }) => createAnimationMode(animation, reverse)};
  animation-duration: ${theme.duration.ms500}s;
  animation-fill-mode: forwards;
  cursor: grab;
`;

export const ToastBlock = styled.div<ToastContentProps>`
  width: ${theme.sizes.widths[4]}px;
  min-height: ${theme.sizes.widths[2]}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${theme.borderRadius}px;
  color: ${({ textColor }) => textColor};
`;

export const ToastContent = styled.div<{ padding: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => padding || theme.sizes.spaces[1]}px;
`;

export const ToastIcon = styled.div`
  margin-left: ${theme.sizes.spaces[2]}px;
  margin-right: ${theme.sizes.spaces[2]}px;
  img {
    width: ${theme.sizes.widths[1]}px;
    height: ${theme.sizes.widths[1]}px;
  }
`;

export const ToastDescription = styled.div`
  font-size: ${theme.sizes.fontSizes[2]}px;
  font-weight: ${theme.sizes.fontWeight[2]};
`;

export const CloseButton = styled.div`
  float: right;
  margin: ${theme.sizes.spaces[2]}px;
  cursor: pointer;

  img {
    width: ${theme.sizes.widths[0]}px;
    height: ${theme.sizes.widths[0]}px;
  }
`;
export const ToastTitle = styled.div`
  margin: ${theme.sizes.spaces[1]}px;
  font-weight: ${theme.sizes.fontWeight[0]};
  font-size: ${theme.sizes.fontSizes[1]}px;
  color: ${theme.colors.grey};
`;
