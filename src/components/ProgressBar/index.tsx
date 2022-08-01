import React from 'react';

import { ProgressBarProps } from 'components/ProgressBar/types';

import { StyledProgressBar } from 'components/ProgressBar/styled';

export const ProgressBar: React.FC<ProgressBarProps> = ({ autoCloseTime }) => (
  <StyledProgressBar autoCloseTime={autoCloseTime} />
);
