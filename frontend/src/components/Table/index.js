import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Link from '../Link';
import './Table.scss';

const Table = ({
  name,
  to,
  children,
}) => (
  <section className="c-table">
    <div className="c-table__header">
      <Text size="22px" color="primary" fontWeight="medium">{name}</Text>
      {to && (
        <Link to={to}>
          View more
        </Link>
      )}
    </div>
    <div className="c-table__main">
      {children}
    </div>
  </section>
);

Table.propTypes = {
  /**
   * Section name
   */
  name: PropTypes.string,
  /**
   * View more href
   */
  to: PropTypes.string,
  children: PropTypes.any,
};

export default Table;
