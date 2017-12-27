import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../../organisms/Hero';


const HomeTemplate = ({ children, heroProps }) => (
  <div>
    {heroProps && <Hero {...heroProps} />}
    {children}
  </div>
);

HomeTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  heroProps: PropTypes.object,
};

HomeTemplate.defaultProps = {
  children: undefined,
  heroProps: undefined,
};

export default HomeTemplate;
