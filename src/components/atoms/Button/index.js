import React from 'react';
import styled from 'styled-components';
import { Button as SuiButton } from 'semantic-ui-react';
import { setCustomProps } from '../../../utils/helpers';

const textClassName = 'text';

const StyledSuiButton = styled(SuiButton)`
  &.ui.button {
    &.${textClassName} {
      font-weight: normal;
      background-color: transparent;
      padding: 0;
    }
  }
`;

const Button = (rawProps) => {
  const props = setCustomProps(rawProps, {
    text: textClassName,
  });
  return (
    <StyledSuiButton {...props} />
  );
};

export default Button;
