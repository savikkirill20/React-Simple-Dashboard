import React from 'react';
import PropTypes from 'prop-types';
import './ActionsBar.scss';

const ActionsBar = ({
  children,
}) => (
  <section className="c-actions-bar">
    {children}
  </section>
);

ActionsBar.propTypes = {
  children: PropTypes.any,
};

const ActionsBarItem = ({
  children,
}) => (
  <section className="c-actions-bar__item">
    {children}
  </section>
);

ActionsBar.propTypes = {
  children: PropTypes.any,
};

ActionsBar.Item = ActionsBarItem;

export default ActionsBar;
