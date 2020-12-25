import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import logo from './logo.svg';
import iconOverview from './icon-overview.svg';
import iconJourneys from './icon-journey.svg';
import iconActions from './icon-actions.svg';
import iconContent from './icon-content.svg';
import iconAudiences from './icon-audiences.svg';
import iconAttribution from './icon-attribution.svg';
import iconLinkBuilder from './icon-link-builder.svg';

const Nav = () => (
  <nav className="c-nav">
    <div className="c-nav__logo">
      <img src={logo} width="188" height="47" alt="Logo" />
    </div>
    <ul className="c-nav__list">
      <li>
        <Link to='/' className="c-nav__primary-link">
          <img src={iconOverview} alt="" />
          <span>Overview</span>
        </Link>
      </li>
      <li>
        <Link to='/journeys' className="c-nav__primary-link">
          <img src={iconJourneys} alt="" />
          <span>Journeys</span>
        </Link>
      </li>
      <li>
        <Link to='/actions' className="c-nav__primary-link">
          <img src={iconActions} alt="" />
          <span>Actions</span>
        </Link>
      </li>
      <li>
        <Link to='/' className="c-nav__primary-link">
          <img src={iconContent} alt="" />
          <span>Content</span>
        </Link>
      </li>
      <li>
        <Link to='/' className="c-nav__primary-link">
          <img src={iconAudiences} alt="" />
          <span>Audiences</span>
        </Link>
      </li>
      <li>
        <Link to='/' className="c-nav__primary-link">
          <img src={iconAttribution} alt="" />
          <span>Attribution</span>
        </Link>
      </li>
      <li>
        <Link to='/' className="c-nav__primary-link">
          <img src={iconLinkBuilder} alt="" />
          <span>Link Builder</span>
        </Link>
      </li>
    </ul>
    <ul className="c-nav__list">
      <li>
        <Link to='/' className="c-nav__secondary-link">
          <span>Support</span>
        </Link>
      </li>
      <li>
        <Link to='/' className="c-nav__secondary-link">
          <span>Admin</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
