/**
 * Render the class names based on the custom props selected
 * @param {{ prop: className }} customProps - a reference list of custom props and classnames
 * @param {{}} allProps - the user-defined props
 * @return {string} - the className string to render onto the DOM
 */
export const getCustomClassName = (customProps, allProps) => {
  const classNames = [];
  Object.entries(allProps).forEach(([key]) => {
    if (allProps[key]) {
      classNames.push(customProps[key]);
    }
  });
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
