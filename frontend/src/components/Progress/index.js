import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text from '../Text';
import './Progress.scss';

const Progress = ({ value, className, ...restProps }) => {
  const classes = classNames('c-progress', className);

  return (
    <div className={classes} {...restProps}>
      <Text size="14px" fontWeight="medium" color="green">{value}%</Text>
      <div className="c-progress__bar">
        <div className="c-progress__bar-value" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};

Progress.propTypes = {
  /**
   * Progress value in %, from 0 to 100
   */
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Progress.defaultProps = {
  className: '',
};

export default Progress;