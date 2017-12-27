import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Icon } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumbs from '../../atoms/Breadcrumbs';


const handleHeroHeight = (props) => {
  if (props.height && typeof props.height === 'number') {
    return props.height ? `${props.height.toString()}px` : `${this.defaultProps.height.toString()}px`;
  }
  if (typeof props.height === 'string') {
    return props.height;
  }
  return false;
};

const HeroFactory = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: url("${props => props.src}") no-repeat center;
  background-size: cover;
  background-color: rgba(0,0,0,0.65);
  background-blend-mode: multiply;
  width: 100%;
  height: ${handleHeroHeight};
  /* Chrome flexbox height fix, we set min-height automatically based on height */
  min-height: ${handleHeroHeight};
  text-align: ${props => props.textAlign || this.defaultProps.textAlign};
  color: white;
`;

HeroFactory.propTypes = {
  src: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  textAlign: PropTypes.string,
};

HeroFactory.defaultProps = {
  height: 400,
  textAlign: 'center',
  src: undefined,
};

const HeroHeader = styled.h1`
  font-size: 3.5em;
  line-height: 1.15;
  margin: 0;
  color: inherit;
  font-weight: normal;
`;

const HeroSubheader = styled.p`
  font-size: 1.5em;
  margin-top: 0.2em;
  font-weight: normal;
  letter-spacing: 0.5px;
  opacity: 0.85;
  color: inherit;
`;

const HeroCTA = ({
  href, children, isHashLink, onClick,
}) => {
  const defaultProps = {
    className: 'ui big primary button',
    role: 'button',
    style: { margin: '1em 0 0' },
  };

  if (href) {
    defaultProps.to = href;
  }

  if (onClick) {
    return (<Button onClick={onClick} {...defaultProps}>{children}</Button>);
  }

  if (isHashLink) {
    return (
      <HashLink {...defaultProps}>{children}</HashLink>
    );
  }
  return (
    <Link {...defaultProps}>{children}</Link>
  );
};

HeroCTA.propTypes = {
  href: PropTypes.string,
  children: PropTypes.array.isRequired,
  isHashLink: PropTypes.bool,
  onClick: PropTypes.func,
};

HeroCTA.defaultProps = {
  isHashLink: false,
  href: undefined,
  onClick: undefined,
};

const BreadcrumbsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  .ui.breadcrumb {
    color: rgba(255,255,255,0.6);
    .divider {
      color: rgba(255,255,255,0.6);
    }
    a, span:last-child {
      color: inherit;
    }
    a:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const HeroContainer = ({ children, props, ...rest }) => (
    <Container {...rest}>{children}</Container>
);

HeroContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  props: PropTypes.object,
};

HeroContainer.defaultProps = {
  props: undefined,
};

HeroFactory.Header = HeroHeader;
HeroFactory.Subheader = HeroSubheader;
HeroFactory.CTA = HeroCTA;
HeroFactory.Container = HeroContainer;

const Hero = ({
  header, subheader, image, btn, height, hasBreadcrumbs,
}) => (
  <HeroFactory src={image} height={height}>
    <HeroFactory.Container text>
      {hasBreadcrumbs && <BreadcrumbsContainer><Breadcrumbs /></BreadcrumbsContainer>}
      <HeroFactory.Header>{header}</HeroFactory.Header>
      <HeroFactory.Subheader>{subheader}</HeroFactory.Subheader>
      {
        btn &&
        <HeroFactory.CTA onClick={btn.onClick} href={btn.href} isHashLink={btn.isHashLink || false}>
          {btn.content}&nbsp;&nbsp;<Icon name="arrow circle outline down" />
        </HeroFactory.CTA>
      }
    </HeroFactory.Container>
  </HeroFactory>
);

Hero.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  image: PropTypes.string,
  btn: PropTypes.shape({
    href: PropTypes.string,
    content: PropTypes.string.isRequired,
    isHashLink: PropTypes.bool,
    onClick: PropTypes.func,
  }),
  hasBreadcrumbs: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Hero.defaultProps = {
  hasBreadcrumbs: true,
  btn: undefined,
  height: undefined,
  image: undefined,
  subheader: undefined,
};

export default Hero;
