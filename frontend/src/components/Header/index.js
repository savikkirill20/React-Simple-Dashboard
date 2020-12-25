import React from 'react';
import Text from '../Text';
import './Header.scss';

const Header = ({
  title,
  children,
}) => (
  <header className="c-header">
    <div className="c-header__inner">
      <div className="c-header__col-title">
        <Text size="28px">{title}</Text>
      </div>
      <div className="c-header__col-content">
        {children}
      </div>
    </div>
  </header>
);

export default Header;