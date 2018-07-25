import React from 'react';
import styled from 'styled-components';
import { Header as suiHeader } from 'semantic-ui-react';
import { setCustomProps } from '../../../utils/helpers';

const relaxedClassName = 'relaxed';
const compactClassName = 'compact';
const inheritClassName = 'inherit';

const StyledHeader = styled(suiHeader)`
  &.ui.header {
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
    &.${relaxedClassName} { letter-spacing: 1px; }
    &.${compactClassName} { letter-spacing: -1px; }
    &.${inheritClassName} { color: inherit; }
  }
`;

const Header = (rawProps) => {
  const customProps = {
    relaxed: relaxedClassName,
    compact: compactClassName,
    inherit: inheritClassName,
  };
  const props = setCustomProps(rawProps, customProps);

  return (
    <StyledHeader {...props} />
  );
};

export default Header;
