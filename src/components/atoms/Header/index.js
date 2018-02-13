import React from 'react';
import styled from 'styled-components';
import { Header as suiHeader } from 'semantic-ui-react';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';


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

const Header = (header) => {
  // 1. Define custom props for this component
  const customProps = {
    relaxed: relaxedClassName,
    compact: compactClassName,
    inherit: inheritClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    relaxed: false,
    compact: false,
    inherit: true,
  };
  const allProps = { ...defaultProps, ...header };
  // 2. Render the custom class names
  const className = header &&
    getCustomClassName(customProps, allProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticProps = header &&
    subtractObject({ ...defaultProps, ...customProps }, allProps);

  return (
    <StyledHeader {...semanticProps} className={className} />
  );
};

export default Header;
