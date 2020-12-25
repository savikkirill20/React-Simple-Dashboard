import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import './Link.scss';

const Link = ({ to, children }) => (
  <BaseLink to={to} className="c-link">
    {children}
  </BaseLink>
);

export default Link;
