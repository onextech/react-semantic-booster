import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';
import IconListItem from './IconListItem';


const iconListItemClassName = 'icon-list-item';
const verticalClassName = 'vertical';
const centerClassName = 'center';

const StyledIconList = styled.div`
  .${iconListItemClassName} {
    &:not(:last-child) { margin-bottom: 1em; }
  }
  &.${centerClassName} {
    .${iconListItemClassName} {
      justify-content: center;
    }
  }
`;

const IconList = (props) => {
  const { items, vertical } = props;

  const iconListItemProps = { vertical };

  // 1. Define custom props for this component
  const classProps = {
    vertical: verticalClassName,
    center: centerClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    vertical: true,
    center: false,
  };
  const customProps = {};

  const allProps = { ...defaultProps, ...props };
  // 2. Render the custom class names
  const className = props &&
    getCustomClassName(classProps, allProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticProps = props &&
    subtractObject({ ...defaultProps, ...classProps }, allProps);

  return (
    <StyledIconList {...semanticProps} {...customProps} className={className}>
      {
        items.map((item, i) => (
          <IconListItem
            key={i}
            {...item}
            {...iconListItemProps}
            className={iconListItemClassName} />
        ))
      }
    </StyledIconList>
  );
};

IconList.propTypes = {
  items: PropTypes.array.isRequired,
  vertical: PropTypes.bool,
  center: PropTypes.bool,
};

IconList.Item = IconListItem;

export default IconList;
