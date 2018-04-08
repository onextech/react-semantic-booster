import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { getCustomClassName, subtractObject } from '../../../../utils/helpers';


const verticalClassName = 'vertical';

const StyledIconListItem = styled.div`
  display: flex;
  .icon { margin-right: .3em; }
  .text { margin-top: .15em; }
  h5.ui.header {
    font-size: 1.2em;
    margin-bottom: 0;
  }
  &.${verticalClassName} {
    flex-direction: column;
    text-align: center;
    .icon { margin-right: 0; }
    .text { margin-top: .6em; } 
  }
`;

const IconListItem = (props) => {
  const { icon, content, header } = props;

  // 1. Define custom props for this component
  const classProps = {
    vertical: verticalClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    vertical: false,
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
    <StyledIconListItem {...semanticProps} {...customProps} className={className}>
      <div className="icon">
        <Icon name="check circle" size="large" {...icon} />
      </div>
      <div className="text">
        {header && <Header as="h5">{header}</Header>}
        {content && <p>{content}</p>}
      </div>
    </StyledIconListItem>
  );
};

IconListItem.propTypes = {
  icon: PropTypes.object,
  content: PropTypes.string,
  header: PropTypes.string,
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

export default IconListItem;
