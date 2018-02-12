import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Header } from 'semantic-ui-react';
import { MediaCss } from '../../../utils/responsive';


const verticalAlignFlexCssMap = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
};

const StyledGrid = styled(Grid)`
  &.ui.grid.inverted {
    color: white;
  }
`;

const Col = styled(Grid.Column)`
  ${MediaCss.min.sm`height: 100%;`}
  display: flex;
  font-size: 120%;
  
  // Fix for column verticalAlign with the addition of .content element
  ${({ verticalAlign }) => {
    if (verticalAlign) {
      const vaCssValue = verticalAlignFlexCssMap[verticalAlign];
      return `
        &.column.aligned.${verticalAlign} .content {
          height: 100%;
          display: flex;
          align-items: ${vaCssValue};
        }
      `;
    }
    return false;
  }}
  
  // textColor
  ${({ textcolor }) => {
    if (textcolor) {
      return `&.column { color: ${textcolor}; }`;
    }
    return false;
  }}
  
  // background
  ${(props) => {
    if (props.background) {
      const {
        src,
        repeat,
        position,
        opacity,
        fromColor,
        toColor,
        size,
        attachment,
        color,
        overlay = true,
      } = props.background;
      const defaultOpacity = 0.8;
      const linearOpacity = overlay ? (opacity || defaultOpacity) : 0;
      const defaultLinearColor = 'rgba(0,0,0,' + linearOpacity + ')'; // eslint-disable-line
      const linearFrom = fromColor || defaultLinearColor;
      const linearTo = toColor || defaultLinearColor;
      return `
        &.column {
          background-color: ${color || 'black'};
          ${src && `
            background: linear-gradient(${linearFrom}, ${linearTo}), url('${src}');
            background-position: ${position || 'center'};
            background-repeat: ${repeat || 'no-repeat'};
            background-size: ${size || 'cover'};
            background-attachment: ${attachment || 'scroll'};`}
        }`;
    }
    return false;
  }}
  `;

const ColumnContent = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 3em 0;
  p {
    line-height: 1.6;
  }
  `;

const ContentHeader = styled(Header)`
  &.ui.header {
    width: 100%;
    opacity: 0.95;
    font-weight: normal;
    &:only-child {
      margin-bottom: 0;
    }
  }
  `;

const ContentSubheader = styled(Header)`
  &.ui.header {
    opacity: 0.86;
    letter-spacing: 1px;
  }
  `;

const HalfBanner = ({
  rightCol,
  leftCol,
  grid,
}) => (
  <StyledGrid stackable inverted {...grid}>
    <Grid.Row columns="equal">
      {
        [leftCol, rightCol].map((col, i) => (
          <Col {...col} key={['left', 'right'][i]}>
            <ColumnContent className="content">
              {col.subheader && <ContentSubheader as="h6" sub size="tiny" inverted {...col.subheader} />}
              {col.header && <ContentHeader as="h5" size="huge" inverted {...col.header} />}
              {col.body}
            </ColumnContent>
          </Col>
        ))
      }
    </Grid.Row>
  </StyledGrid>
);

HalfBanner.propTypes = {
  rightCol: PropTypes.object.isRequired,
  leftCol: PropTypes.object.isRequired,
  grid: PropTypes.object, // sui grid props
};

export default HalfBanner;
