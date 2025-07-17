import React from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

const LocalisedLink = ({ to, children, ...props }) => {
  const { locale } = useIntl();
  const path = locale === 'en' ? to : `/${locale}${to}`;

  return (
    <Link to={path} {...props}>
      {children}
    </Link>
  );
};

LocalisedLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LocalisedLink;
