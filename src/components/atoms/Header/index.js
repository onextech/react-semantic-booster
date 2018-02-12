import React from 'react';
import styled from 'styled-components';
import { Header as suiHeader } from 'semantic-ui-react';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';


const relaxedClassName = 'relaxed';
const inheritClassName = 'inherit';

const StyledHeader = styled(suiHeader)`
  &.ui.header {
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
    &.${relaxedClassName} { letter-spacing: 1px; }
    &.${inheritClassName} { color: inherit; }
  }
`;

const Header = (header) => {
  // 1. Define custom props for this component
  const customHeaderProps = {
    relaxed: relaxedClassName,
    inherit: inheritClassName,
  };
  // 1.5. Define default props
  const defaultHeaderProps = {
    relaxed: true,
    inherit: true,
  };
  const allHeaderProps = { ...defaultHeaderProps, ...header };
  // 2. Render the custom class names
  const headerClassName = header &&
    getCustomClassName(customHeaderProps, allHeaderProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticHeaderProps = header &&
    subtractObject({ ...defaultHeaderProps, ...customHeaderProps }, allHeaderProps);

  return (
    <StyledHeader {...semanticHeaderProps} className={headerClassName} />
  );
};

export default Header;
