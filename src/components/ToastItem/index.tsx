import React, { useState } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import { ProgressBar } from 'components/ProgressBar';

import { theme } from 'theme';

import { ToastProps } from 'components/ToastItem/types';

import {
  CloseButton,
  ToastBlock,
  ToastContent,
  ToastDescription,
  ToastIcon,
  ToastTitle,
  ToastWrapper,
} from './styled';

const ToastItem: React.FC<ToastProps> = ({
  title,
  message,
  textColor,
  backgroundColor,
  icon,
  padding,
  autoClose,
  autoCloseTime,
  animation,
  onClose,
}) => {
  const [reverse, setReverse] = useState(false);
  const [offsetX, setOffsetX] = useState(0);

  const onToastClose = () => {
    setReverse(true);
  };

  const onAnimationEnd = () => {
    if (reverse) {
      onClose();
    }
  };

  const handleOnDrag = (e: DraggableEvent, data: DraggableData) => {
    setOffsetX(data.x);
  };

  const handleStopDrag = () => {
    if (offsetX !== 0) {
      setReverse(true);
    }
  };

  return (
    <Draggable axis="x" onDrag={handleOnDrag} onStop={handleStopDrag}>
      <ToastWrapper
        onAnimationEnd={onAnimationEnd}
        animation={animation}
        reverse={reverse}
        offsetX={offsetX}
      >
        <ToastTitle>{title}</ToastTitle>
        <ToastBlock backgroundColor={backgroundColor} textColor={textColor}>
          <ToastContent padding={padding}>
            <ToastIcon>
              <img src={icon} alt="icon" />
            </ToastIcon>
            <ToastDescription>{message}</ToastDescription>
            <CloseButton onClick={onToastClose}>
              <img src={theme.icons.closeIcon} alt="close" />
            </CloseButton>
          </ToastContent>
          {autoClose && <ProgressBar autoCloseTime={autoCloseTime} />}
        </ToastBlock>
      </ToastWrapper>
    </Draggable>
  );
};

export default ToastItem;
