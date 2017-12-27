import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';
import { capitalizeFirstLetter } from '@onextech/react-apollo-utils';


const Breadcrumbs = ({ match, customCrumbs }) => {
  const crumbs = match.url.split('/');

  /**
   * Set custom routes on certain params
   * @param {string} crumb
   * @param {number} index
   * @param {{}} rules - set of keys (match.params path) and values (route to go to)
   * @returns {string}
   */
  const getCrumbSlug = (crumb, index, rules) => {
    Object.entries(rules).forEach(([k, v]) => {
      if (k === crumb) {
        return v;
      }
      return crumbs.slice(0, index + 1).join('/');
    });
    return '';
  };

  return (
    <Breadcrumb style={{ margin: '0.75em auto' }}>
      {
        crumbs.map((crumb, index) => {
          const slug = getCrumbSlug(crumb, index, customCrumbs);

          const jsx = [
            <Breadcrumb.Section key={crumb}>
              <Link to={slug}>{index === 0 ? 'Home' : capitalizeFirstLetter(crumb)}</Link>
            </Breadcrumb.Section>,
          ];

          if (index !== crumbs.length - 1) {
            jsx.push(<Breadcrumb.Divider key={`${crumb}-divider`} icon="right angle" />);
          }

          return jsx;
        })
      }
    </Breadcrumb>
  );
};

Breadcrumbs.propTypes = {
  match: PropTypes.object.isRequired,
  customCrumbs: PropTypes.object,
};

Breadcrumbs.defaultProps = {
  customCrumbs: {},
};

export default withRouter(Breadcrumbs);
