import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import { getCustomClassName, subtractObject } from '../../../../utils/helpers';


const boldClassName = 'bold';
const relaxedClassName = 'relaxed';
const uppercaseClassName = 'uppercase';

const Subheader = styled(Header.Subheader)`
  &.sub.header {
    font-size: ${100 / 2}%; // half font-size as due to doubling on the Banner component font-size 
    margin-bottom: 0.25em;
    &.${boldClassName} { font-weight: bold; }
    &.${relaxedClassName} { letter-spacing: 1px; }
    &.${uppercaseClassName} { text-transform: uppercase; }
  }
`;

const BannerSubheader = (subheader) => {
  // 1. Define custom props for this component
  const customSubheaderProps = {
    bold: boldClassName,
    relaxed: relaxedClassName,
    uppercase: uppercaseClassName,
  };
  // 1.5. Define default props
  const defaultSubheaderProps = {
    bold: true,
    relaxed: true,
    uppercase: true,
  };
  const allSubheaderProps = { ...defaultSubheaderProps, ...subheader };
  // 2. Render the custom class names
  const subheaderClassName = subheader &&
    getCustomClassName(customSubheaderProps, allSubheaderProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticSubheaderProps = subheader &&
    subtractObject({ ...defaultSubheaderProps, ...customSubheaderProps }, allSubheaderProps);

  return (
    <Subheader className={subheaderClassName} {...semanticSubheaderProps} />
  );
};

export default BannerSubheader;
