import styled from 'styled-components';

import { theme } from 'theme';

export const StyledErrorMessage = styled.div`
  width: ${theme.sizes.widths[5]}px;
  height: ${theme.sizes.widths[3]}px;
  background-color: ${theme.colors.white};
  border: 6px double ${theme.colors.ERROR_COLOR};
  border-radius: ${theme.borderRadius}px;
  padding: ${theme.sizes.spaces[1]}px;
  text-align: center;
  font-size: ${theme.sizes.fontSizes[2]};
`;
