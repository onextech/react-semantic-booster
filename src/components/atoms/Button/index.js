import React from 'react';
import styled from 'styled-components';
import { Button as SuiButton } from 'semantic-ui-react';
import { setCustomProps } from '../../../utils/helpers';

const TEXT_CLASS = 'text';

const StyledSuiButton = styled(SuiButton)`
  &.ui.button {
    &.${TEXT_CLASS} {
      font-weight: normal;
      background-color: transparent;
      padding: 0;
    }
  }
`;

const Button = (rawProps) => {
  const props = setCustomProps(rawProps, {
    text: [TEXT_CLASS, false],
  });
  return (
    <StyledSuiButton {...props} />
  );
};

export default Button;
