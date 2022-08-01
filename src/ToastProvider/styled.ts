import styled from 'styled-components';

import { theme } from 'theme';

export const ShowButton = styled.button`
  width: ${theme.sizes.widths[3]}px;
  height: ${theme.sizes.widths[0]}px;
  background-color: ${theme.colors.grey};
  outline: none;
  border-radius: ${theme.borderRadius}px;
  font-family: ${theme.fontFamily};
  font-size: ${theme.sizes.fontSizes[0]}px;
  color: ${theme.colors.white};
  cursor: pointer;
`;
