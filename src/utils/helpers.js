import { isPlainObject } from 'lodash';

/**
 * Render the class names based on the custom props selected
 * @param {{ prop: className }} customProps - a reference list of custom props and classnames
 * @param {{ className: {string} }} allProps - the user-defined props
 * @return {string} - the className string to render onto the DOM
 */
export const getCustomClassName = (customProps, allProps) => {
  const classNames = [];

  Object.entries(allProps).forEach(([key]) => {
    if (allProps[key]) {
      classNames.push(customProps[key]);
    }
  });

  // Add any existing class names
  if (allProps.className) {
    classNames.push(allProps.className);
  }

  return classNames.join(' ');
};

/**
 * Subtract object from another object (non-recursive)
 * @param subtrahend - The part being taken away
 * @param minuend - The part you start with
 * @return {{}} - The part that is left after subtraction
 */
export const subtractObject = (subtrahend, minuend) => {
  const difference = {};
  if (minuend) {
    Object.keys(minuend).forEach((key) => {
      if (!subtrahend[key]) {
        difference[key] = minuend[key];
      }
    });
  }
  return difference;
};

/**
 * A styled component function to set padding top/bottom of an element
 * from a mulitplier
 * @param {Number || Object} spacer - a multiplier
 * @param {Number} baseEm - The base em size to scale the spacer
 * @return {string} - the css to apply
 */
export const setStyledSpacer = (spacer, baseEm = 5) => {
  if (isPlainObject(spacer)) {
    const result = [];
    Object.keys(spacer).map((direction) => {
      const value = spacer[direction] * baseEm;
      return result.push(`padding-${direction}: ${value}em;`);
    });
    return result.join(' ');
  }
  return `padding: ${baseEm * spacer}em 0;`;
};

/**
 * Set custom props
 * @param {{}} props
 * @param {{}} customProps
 * @param {{}} defaultProps
 * @return {{className: string}}
 */
export const setCustomProps = (props, customProps, defaultProps) => {
  const newProps = { ...defaultProps, ...props };
  const classNames = [];

  const getClassName = (value) => {
    if (typeof value === 'object') {
      const classes = [value.className];
      if (value.classProps) classes.push(value.classProps);
      return classes.join(' ');
    }
    return value;
  };

  const getShouldDeleteProp = value => (typeof value === 'object' ? !value.props : true);

  Object.keys(customProps).map((key) => {
    const value = customProps[key];

    const shouldDeleteProp = getShouldDeleteProp(value);
    if (shouldDeleteProp) delete newProps[key];

    const isCustomPropExist = typeof props[key] !== 'undefined';
    if (isCustomPropExist) {
      const className = getClassName(value);
      return classNames.push(className);
    }
  });

  if (props.className) classNames.push(...props.className.split(' '));

  return { ...newProps, className: classNames.join(' ') };
};

/**
 * Merge prev class names with new class names to prevent
 * overwrite of className prop
 * @param {[]|string} newClassName
 * @param {[]|null} prevClassName
 * @return {string}
 */
export const mergeClassNames = (newClassName, prevClassName) => {
  let nextClassName = [];
  if (prevClassName) {
    nextClassName = prevClassName.split(' ');
  }
  if (typeof newClassName === 'string') nextClassName.push(newClassName);
  if (Array.isArray(newClassName)) nextClassName.push(...newClassName);
  return nextClassName.join(' ');
};
